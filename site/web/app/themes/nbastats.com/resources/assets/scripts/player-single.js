import axios from 'axios'
import { findTeam } from './helpers/find-team.js';

// This file is responsible for finding the player's team according to his ID and render the info in the banner
const extractSlug = () => {

  const path = window.location.pathname.split( '/' )
  // Get the last nums (single-player ID) so we can run match with the person on session storage
  const playerIdSlug = path.slice(-2)[0]
  const playerStats = window.sessionStorage.getItem(playerIdSlug)
  // And fetch our data
  return makeRequest(playerStats)
}

export const makeRequest = slug => {

  axios.get(slug)
  .then(response => {
    const singlePlayersTeamId = response.data.league.standard.teamId
    // pass singleplayersTeamId variable using Promise.all to findTeam
    // findTeam is a helper function imported as an ES6 module
    return Promise.all([findTeam(), singlePlayersTeamId]);
  })
  .then(([response, singlePlayersTeamId]) => {
    // save it on sessionstorage
    sessionStorage.setItem('single-players-team', singlePlayersTeamId);
    return response // returns undefined
  })
  .catch(err => console.error(`There was an error with your request ${err}`))
}

extractSlug()

