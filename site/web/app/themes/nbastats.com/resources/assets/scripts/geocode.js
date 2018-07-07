import axios from 'axios'
// Not in use as it will only return one marker.
// Logic for the google maps API is in map.js
export const geocodeQuery = (url, callback) => {

  axios.get(url)
      .then(response => {

       const lng = response.data.results[0].geometry.location.lng
       const lat = response.data.results[0].geometry.location.lat

       const coords = { lng, lat }

       return callback(coords);
    })
}
