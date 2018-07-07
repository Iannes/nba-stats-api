  // Single Player Banner

  // Retrieve url from browser and split in array
  const path = window.location.pathname.split( '/' )
  // Get the last nums so we can run match with the person on session storage
  const playerId = path.slice(-2)[0]
  const name = localStorage.getItem(playerId);
  const formattedName = name !== null ? name.replace(/\//g,' ') : false
  const image = `https://nba-players.herokuapp.com/players/${name}`

  // This method is called within the find team module
  export const renderTeamBanner = (elementId, teamName) => {
    // get the container
    const playerInfoContainer = document.getElementById(elementId)
    // If the team returns Null let the user know
    teamName === null ? 'N / A' : teamName

    const banner = `
        <section class="background-image background-image__single">
        <figure>
          <img src=${image.toLowerCase()} width='280' height='220' alt="${formattedName}'s profile photo" style="border-radius: 50%"/>
          <figcaption><p>${formattedName}</p>  <p>${teamName}</p></figcaption>
        </figure>
        </section>
      `
    // if there is a container in the DOM we can render the banner
    playerInfoContainer !== null ? playerInfoContainer.innerHTML = banner : false
}

