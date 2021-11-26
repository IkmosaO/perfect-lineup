/* 
this function inputs an array of objects 

this function either accepts or denies a list

this function returns either true or false
*/

// const lineup = require('./tests')

const validateLineup = (array) => {
  let singleTeam = false
  let singleGame = false
  let playerPositions = false

  // total salary of lineup guard clause, if the total salary of the players in a lineup
  // is more than 45000, the lineup is rejected
  if (array.reduce((acc, player) => acc + player.salary, 0) > 45000) return false
  // compare team IDs, if each team is different change singleTeam to true
  if (singleTeam(array)) {
    singleTeam = true
  }
}

// this function returns true if each teamid in a lineup is different
const singleTeam = (array) => {
  const uniqueElements = new Set()

  return array.some(currentObject => uniqueElements.size === uniqueElements.add(currentObject.teamId).size)
}

// validateLineup(lineup)

module.exports = validateLineup
