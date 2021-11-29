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
//   id: 3, name: 'Mitch Moreland', position: '1B', teamId: 12, gameId: 123, salary: 2800
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
  let singleTeamCondition = false
  let singleGame = true
  let playerPositions = false

  // for (let index = 0; index < array.length; index++) {
  //   let newArr = []

  //   if (array[index].teamId === newArr.teamId) {
  //     newArr.push(array[index])
  //   }
  // }
  // compare team IDs, if each team is different change singleTeam to true
  if (verifyTeamNumbers(array)) {
    singleTeamCondition = false
  }

  return singleTeamCondition
}

// this function returns true if a lineup has less than 3 players from
// a single team
const verifyTeamNumbers = (array) => {
  let uniquePlayers = []
  const allTeamIDs = array.map(onlyTeamIDs => onlyTeamIDs.teamId)

  console.log(allTeamIDs)

  // for each player in the array, if the array uniquePlayers does not include player.teamID
  // push player.teamid into uniquePlayers
  array.forEach(player => {
    if (!uniquePlayers.includes(player.teamId)) uniquePlayers.push(player.teamId)
  })
  console.log(uniquePlayers) // [12, 22, 20, 18, 14, 27, 11, 15]
  // at this point uniquePlayers is an array of non-duplicating teamIDs
  // now count how many times those teamIDs occur in the array, if the count exceeds 2 for any teamID
  // set correctNumberOfPlayers to false
  // uniquePlayers.forEach(player => {

  // })
}
// for testing
// validateLineup(lineup)

module.exports = validateLineup
