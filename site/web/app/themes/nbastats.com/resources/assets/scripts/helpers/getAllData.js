import axios from 'axios'

export const getAllData = (linksArray, callback) => { // Takes a links array and returns Promise.all

  let promiseArray = linksArray.map( url => axios.get(url) ); // Map through all urls and request data from each one

  Promise.all( promiseArray )
  // Once we get the response we call plotMarkers function defined in map.js
        .then(response => response)
        .then(callback)
        .catch(console.log)
  }
