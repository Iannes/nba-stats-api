import axios from 'axios';
// This renders all tabular data to the single-player's page
// Extracts players ID from the url and makes an api call to get the player's data
const extractPlayerEndPoint = () => {

  const path = window.location.pathname.split( '/' ) // Retrieve url from browser and split in array

  const playerIdSlug = path.slice(-2)[0] // Get the last nums so we can run match with the person on session storage

  const playerStats = window.sessionStorage.getItem(playerIdSlug) // save matching endpoint from sessionstorage

  // If there is no endpoint we are on home page | Else we proceed to fetch the player's data
  playerStats !== null ? getSinglePlayerData(playerStats) : false
}

const render = (elementId, data) => {

  const infoContainer = document.getElementById(elementId)

  const component = `
            <tr class="playerRow">
              <th scope="row">${data.apg !== null ? data.apg : false}</th>
              <td>${data.ftp !== null ? data.ftp : false}</td>
              <td>${data.fgp !== null ? data.fgp : false}</td>
              <td>${data.ppg !== null ? data.ppg : false}</td>
              <td>${data.rpg !== null ? data.rpg : false}</td>
            </tr>
          `
  infoContainer ? infoContainer.innerHTML = component : false
}

 const getSinglePlayerData = endPoint => {

  axios.get(endPoint)
    .then(response => {
      // Get to a specific point within the object
      const singlePlayerStats = response.data.league.standard.stats.regularSeason.season[0].total

      // Make a data object so we can loop in render method and sprinkle our data to the views
         const data = {
          apg : singlePlayerStats.apg,
          ftp : singlePlayerStats.ftp,
          fgp : singlePlayerStats.fgp,
          ppg : singlePlayerStats.ppg,
          rpg : singlePlayerStats.rpg,
        }
      // Call render method
      render('player' , data)
  })
  .catch(err => console.error(`There was an error with the player's stats request ${err}`))
}
// We extract the id from our url and run a match with session storage to find our player's endpoint
extractPlayerEndPoint()


