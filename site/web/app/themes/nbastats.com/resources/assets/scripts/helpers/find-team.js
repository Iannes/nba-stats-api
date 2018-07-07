import axios from 'axios'
import { renderTeamBanner } from '../components/banner.js'
const allTeams = "http://data.nba.net/10s/prod/2018/teams_config.json";

//===============================================================================================
export const findTeam = () => {

  axios.get(allTeams)
  .then(response => {
    // Get all the teams in an array
    const teamsArray = response.data.teams.config
    // Loop through each team and extract data
    teamsArray.map(team => {
      // Get team Ids
      let teamId = team.teamId
      // Get the item from session storage
      const singlePlayersTeamId = sessionStorage.getItem('single-players-team');
      // If a match is found AND there is a name, save it in a variable
      if (teamId == singlePlayersTeamId && team.ttsName !== null) {

        let singlePlayersTeamName = team.ttsName
         sessionStorage.setItem('single-players-team-name', singlePlayersTeamName);
         // Call a settimeout to retrieve the correct data
         setTimeout(renderTeamBanner('player-info', singlePlayersTeamName), 0);

        } else {

          let singlePlayersTeamName = 'N / A'
          return  singlePlayersTeamName
        }
    })
  })
  .catch(err => console.log(`There was an error while searching for the teams : ${err}`))
}