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
  if (array.reduce((acc, player) => {
    return acc + player.salary
  }, 0) > 45000) return false

  let singleTeam = true
  let singleGame = true
  let playerPositions = false

  if (verifySingleTeam(array)) {
    singleTeam = false
  }

  if (verifySingleGame(array)) {
    singleGame = false
  }

  if (verifyPlayerPositions(array)) {
    playerPositions = true
  }

  return singleTeam && singleGame && playerPositions
}

// this function returns true if a lineup has less than 3 players from
// a single team
const verifySingleTeam = (array) => {
  let uniquePlayers = []
  let playerCount = true
  const allTeamIDs = array.map((onlyTeamIDs) => {
    return onlyTeamIDs.teamId
  })

  // for each player in the array, if the array uniquePlayers does not include player.teamID
  // push player.teamid into uniquePlayers
  array.forEach(player => {
    if (!uniquePlayers.includes(player.teamId)) uniquePlayers.push(player.teamId)
  })


  uniquePlayers.forEach((team => {
    // count how many times this team is in the all teamsID array
    const numberOfPlayers = allTeamIDs.filter((teamID) => {
      return teamID === team
    }).length

    // if the count from line 75 is greater than 2, set playerCount to false
    if (numberOfPlayers > 2) {
      playerCount = false
    }
  }))

  return playerCount
}

const verifySingleGame = (array) => {
  let uniquePlayers = []
  let playerCount = true
  const allGameIDs = array.map((onlyGameIDs) => {
    return onlyGameIDs.gameId
  })

  console.log(allGameIDs)// [12, 22, 12, 18, 14, 27, 11, 15, 12]

  // for each player in the array, if the array uniquePlayers does not include player.gameId
  // push player.gameId into uniquePlayers
  array.forEach(player => {
    if (!uniquePlayers.includes(player.gameId)) uniquePlayers.push(player.gameId)
  })
  console.log(uniquePlayers) // [12, 22, 18, 14, 27, 11, 15]


  uniquePlayers.forEach((game => {
    // count how many times this team is in the all gameID array
    const numberOfPlayers = allGameIDs.filter((gameID) => {
      return gameID === game
    }).length

    // if the count from line 107 is greater than 3, set playerCount to false
    if (numberOfPlayers > 3) {
      playerCount = false
    }
  }))

  return playerCount
}


// // for testing
// validateLineup(lineup)
// verifyTeamNumbers(lineup)
module.exports = validateLineup
