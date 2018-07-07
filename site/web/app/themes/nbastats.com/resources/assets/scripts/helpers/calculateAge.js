export const year = str => str.slice(0, 4) // Take the first 4 numbers from player's date of birth

export const calculateAge = birthday => {

  const date =(new Date()).getFullYear()

  const age = date - birthday

  return age
}