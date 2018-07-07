import axios from 'axios';
import { year, calculateAge } from '../helpers/calculateAge.js'
// This renders all players in home page and stores all necessary data in session and local storage. (Mimicing React's state)
const render = (elementId, data) => {

  const permaLink = `http://data.nba.net/data/10s/prod/v1/2018/players/${data.personId}_profile.json`;

  sessionStorage.setItem(data.personId, permaLink); // Set a key value pair to session storage to extract it when redirected to the single page

  localStorage.setItem(data.personId, `${data.lastName}/${data.firstName}`); // Set full name in local storage to retrieve photo on the single page

  const infoContainer = document.getElementById(elementId)

  const component = `
            <tr id=${data.draft.teamId} class="playerRow">
              <th scope="row">${data.jersey !== null ? data.jersey : false}</th>
              <td><a data-id=${permaLink} href='/player-information/${data.personId}'>${data.firstName !== null ? data.firstName : false} ${data.lastName !== null ? data.lastName : false}</a></td>
              <td>${data.pos !== null ? data.pos : false}</td>
              <td>${calculateAge(year(data.dateOfBirthUTC))}</td>
              <td>${data.heightFeet !== null ? data.heightFeet : false}.${data.heightInches !== null ? data.heightInches : false}</td>
              <td>${data.weightPounds !== null ? data.weightPounds : false}</td>
              <td>${data.collegeName !== null ? data.collegeName : false}</td>
              <td>${'N / A'}</td>
            </tr>
          `
  $(infoContainer).append(component)
}

 export const getAllPlayersData = endPoint => {

  axios.get(endPoint)
    .then(response => {
        const playerStats = response.data.league.standard
        playerStats.map( player => render('players' , player) )

    })
    .catch(err => console.error(`There was an error with the player's stats request ${err}`))
}

const players = "http://data.nba.net/10s/prod/v1/2018/players.json";

getAllPlayersData(players) // Call getAllPlayers which in turn calls render function
