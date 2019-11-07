const scores = { 0: 'Love', 1: 'Fifteen', 2: 'Thirty', 3: 'Forty' }
const tieScores = {
  0: 'Love All',
  1: 'Fifteen All',
  2: 'Thirty All',
  3: 'Forty All',
}

export default class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name
    this.player2Name = player2Name
    this.pointPlayer1 = 0
    this.pointPlayer2 = 0
    this.scoresHistory = ['Love All']
  }

  wonPoint(playerName) {
    playerName === this.player1Name ? this.pointPlayer1++ : this.pointPlayer2++
    const newScore = this.getScore()
    this.scoresHistory.push(newScore)
  }
  getScoreHistory() {
    return this.scoresHistory
  }

  areWinner(pointPlayer1, pointPlayer2) {
    return (
      (pointPlayer1 > 3 || pointPlayer2 > 3) &&
      Math.abs(pointPlayer1 - pointPlayer2) >= 2
    )
  }

  areDeuce(pointPlayer1, pointPlayer2) {
    return (
      pointPlayer1 >= 3 && pointPlayer2 >= 3 && pointPlayer1 === pointPlayer2
    )
  }

  hasAdvantage(pointPlayer1, pointPlayer2) {
    return (
      pointPlayer1 >= 3 &&
      pointPlayer2 >= 3 &&
      Math.abs(pointPlayer1 - pointPlayer2) === 1
    )
  }

  getScore() {
    const areWinner = this.areWinner(this.pointPlayer1, this.pointPlayer2)
    if (areWinner) {
      if (this.pointPlayer1 > this.pointPlayer2) {
        return `Winner ${this.player1Name}`
      }

      return `Winner ${this.player2Name}`
    }
    const areDeuce = this.areDeuce(this.pointPlayer1, this.pointPlayer2)
    if (areDeuce) {
      return 'Deuce'
    }

    const hasAdvantage = this.hasAdvantage(this.pointPlayer1, this.pointPlayer2)
    if (hasAdvantage) {
      if (this.pointPlayer1 > this.pointPlayer2) {
        return `Advantage ${this.player1Name}`
      }

      return `Advantage ${this.player2Name}`
    }

    if (this.pointPlayer1 === this.pointPlayer2) {
      return `${tieScores[this.pointPlayer1]}`
    }

    return `${scores[this.pointPlayer1]}-${scores[this.pointPlayer2]}`
  }
}
