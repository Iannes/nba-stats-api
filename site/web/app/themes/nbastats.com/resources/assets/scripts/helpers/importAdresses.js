// require('dotenv').config()

export const importAdresses = (urlArray, addresses) => {
  // Geocode api returns long and lat according to Place name.
  // This will be used in map.js to point the markers on the map
  // A cleaner way is using const formattedAddress = coords.data.results[0].formatted_address
  const apiKey = process.env.GOOGLE_MAP_API_KEY
  const stadium = 'Stadium'
  addresses.map(address => {
     const geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${stadium},+CA&key=${apiKey}`
     urlArray.push(geocode)
    })
  }
