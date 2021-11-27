/* 
this function inputs an array of objects 

this function either accepts or denies a list

this function returns either true or false
*/

// for testing
// const lineup = [{
//   id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
// }, {
//   id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
// }, {
//   id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
// }, {
//   id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
// }, {
//   id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
// }, {
//   id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
// }, {
//   id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
// }, {
//   id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
// }, {
//   id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
// }]


const validateLineup = (array) => {
  // total salary of lineup guard clause, if the total salary of the players in a lineup
  // is more than 45000, the lineup is rejected
  if (array.reduce((acc, player) => acc + player.salary, 0) > 45000) return false
  let singleTeam = false
  let singleGame = false
  let playerPositions = false

  // compare team IDs, if each team is different change singleTeam to true
  if (dupTeamIds(array)) {
    singleTeam = true
  }
  // console.log(singleteam)

  return singleTeam && singleGame && playerPositions
}

// this function returns true if each teamid in a lineup is different
const dupTeamIds = (array) => {
  const teamIds = array.map((lineup) => lineup.teamId)
  const uniqueElements = new Set(teamIds)

  console.log(teamIds)
  console.log(teamIds.length)
  console.log(uniqueElements)

  return uniqueElements.has(teamIds.length)

  // return array.some(currentObject => uniqueElements.size === uniqueElements.add(currentObject.teamId).size)
}

// for testing
// validateLineup(lineup)

module.exports = validateLineup
