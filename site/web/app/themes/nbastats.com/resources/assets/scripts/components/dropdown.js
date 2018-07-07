import axios from 'axios'
// import { setItemInStorage } from './helpers.js'
// localStorage.setItem("teams", JSON.stringify(teams));

const createDropDown = () => {

  const dropdownContainer = document.querySelector('#team-dropdown-container')


  // check to see if we need to run this or not
  if (dropdownContainer) {
    const url = "http://data.nba.net/10s/prod/2018/teams_config.json";
    const dropdown = document.createElement("select");
    // Set the dropdown's id
    dropdown.id = 'team-dropdown'
    // Check if there is a dropdown container on our page
    dropdownContainer !== null ? dropdownContainer.appendChild(dropdown) : false

    let defaultOption = document.createElement('option');
    defaultOption.text = 'NBA Teams';
    defaultOption.id = 'default-option';
    defaultOption.value = 'all';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    // Make the request
    axios.get(url)
    .then(response => {
      const teams = response.data.teams.config
      teams.map(team => {
        // This is going to be used in geocode query to retrieve long and lat
        // These values are then going to help us create the markers on the map for all arenas
        teams.push({team: team.ttsName})
        localStorage.setItem("teams", JSON.stringify(teams));
        // Instantiate variable
        let option ;
        team.ttsName ?  option = document.createElement('option') : false

        option !== undefined ? option.text = team.ttsName : false
        // We are going to show that to the user
        option !== undefined ? option.setAttribute('data-team', team.ttsName) : false
        //Set value for filtering
        option !== undefined ? option.value = team.teamId : false
        option !== undefined ? dropdown.appendChild(option) : false
      })
    })
    .catch(err => console.log(`There was an error with the teams request ${err}`))

  } else {

    return false;
  }

}

createDropDown()