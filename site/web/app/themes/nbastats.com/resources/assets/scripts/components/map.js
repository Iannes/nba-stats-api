import { importAdresses } from '../helpers/importAdresses.js'
import { getAllData } from '../helpers/getAllData.js'

let map ;
const urlArray = []

const teams = JSON.parse(localStorage.getItem("teams") || []); // Get the names of the teams from localstorage and point them to addresses variable
let addresses = [];

teams.map(team => { // push all addresses in our addresses array & filter out all the undefined ones
  addresses.push(team.ttsName)
  addresses.filter(address => address !== undefined)
})

importAdresses(urlArray, addresses) // Imported helper function
/* eslint-disable */
const initMap = () => { // Initialize map and call getAllData in helpers/getAllData.js
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
  });

  getAllData(urlArray, plotMarkers) // Get all our data
}

let infowindow = new google.maps.InfoWindow() // Only one info window to avoid keeping track

const plotMarkers = (coordsArray) => {

    let markers = [];
    let marker;
    let bounds = new google.maps.LatLngBounds();

      coordsArray.map((coords) => {

        const lng = coords.data.results[0].geometry.location.lng
        const lat = coords.data.results[0].geometry.location.lat
        const formattedAddress = coords.data.results[0].formatted_address

        let arena = new google.maps.LatLng(lat, lng);

            markers.push(
               marker = new google.maps.Marker({
                position: arena,
                map: map,
                title: formattedAddress,
                animation: google.maps.Animation.DROP,
                infowindow: infowindow,
              })
            )

            bounds.extend(arena);
            map.fitBounds(bounds); // Fit everything in viewport

            google.maps.event.addListener(marker, 'click', function(){ // Add click listener to infowindow
              infowindow.close();
              infowindow.setOptions({
                content: `<article><h3>${this.title}</h3></article>`,
                maxWidth:300,
            });
              infowindow.open(map, this);
          });
      })
  }
/* eslint-enable */

initMap()

