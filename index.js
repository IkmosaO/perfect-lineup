const validateLineup = (array) => {
  if (array.reduce((acc, player) => {
    return acc + player.salary
  }, 0) > 45000) return false

  let singleTeam = false
  let singleGame = false
  let playerPositions = false

  if (verifySingleTeam(array)) {
    singleTeam = true
  }

  if (verifySingleGame(array)) {
    singleGame = true
  }

  if (verifyPlayerPositions(array)) {
    playerPositions = true
  }

  return singleTeam && singleGame && playerPositions
}

const verifySingleTeam = (array) => {
  let uniquePlayers = []
  let playerCount = true
  const allTeamIDs = array.map((onlyTeamIDs) => {
    return onlyTeamIDs.teamId
  })


  array.forEach(player => {
    if (!uniquePlayers.includes(player.teamId)) uniquePlayers.push(player.teamId)
  })


  uniquePlayers.forEach((team => {
    const numberOfPlayers = allTeamIDs.filter((teamID) => {
      return teamID === team
    }).length

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

  array.forEach(player => {
    if (!uniquePlayers.includes(player.gameId)) uniquePlayers.push(player.gameId)
  })

  uniquePlayers.forEach((game => {
    const numberOfPlayers = allGameIDs.filter((gameID) => {
      return gameID === game
    }).length

    if (numberOfPlayers > 3) {
      playerCount = false
    }
  }))

  return playerCount
}

const verifyPlayerPositions = (array) => {
  let arrayOF = []
  let otherPositions = []
  let correctOf = false
  let correctOtherPositions = false

  array.forEach((player => {
    if (player.position === 'OF') {
      arrayOF.push(player)
    }

    switch (player.position) {
      case 'P':
        otherPositions.push(player.position)
        break
      case 'C':
        otherPositions.push(player.position)
        break
      case '1B':
        otherPositions.push(player.position)
        break
      case '2B':
        otherPositions.push(player.position)
        break
      case '3B':
        otherPositions.push(player.position)
        break
      case 'SS':
        otherPositions.push(player.position)
        break
      default:
        // eslint-disable-next-line no-console
        console.log('player has unknown position')
    }
  }))

  if (arrayOF.length === 3) {
    correctOf = true
  }
  let otherPositionsUnique = otherPositions.reduce((acc, currentValue) => {
    if (!acc.includes(currentValue)) {
      acc.push(currentValue)
    }

    return acc
  }, [])


  if (otherPositions.length === 6 && otherPositionsUnique.length === 6) {
    correctOtherPositions = true
  }


  return correctOf && correctOtherPositions
}


module.exports = validateLineup
