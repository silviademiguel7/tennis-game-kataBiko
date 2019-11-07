import * as React from 'react'
import './App.css'
import MainView from './MainView'
import GameView from './GameView'
import TennisGame from './tennis'

interface State {
  onClickButtonPlay: boolean
  Player1: string
  Player2: string
  game: TennisGame | null
  scoresHistory: string[]
}
class App extends React.Component<{}, State> {
  state: State = {
    onClickButtonPlay: false,
    Player1: '',
    Player2: '',
    game: null,
    scoresHistory: [],
  }

  render() {
    const { onClickButtonPlay, Player1, Player2, scoresHistory } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tennis Game</h1>
        </header>
        {onClickButtonPlay ? (
          <GameView
            Player1={Player1}
            Player2={Player2}
            scoresHistory={scoresHistory}
            onWonPointPlayer1={this.handleOnWonpointPlayer1}
            onWonPointPlayer2={this.handleOnWonpointPlayer2}
            initPageAndReset={this.initPageAndReset}
          />
        ) : (
          <MainView
            Player1={Player1}
            Player2={Player2}
            setPlayer1={this.setPlayer1}
            setPlayer2={this.setPlayer2}
            onClickPlay={this.handleOnClickPlay}
          />
        )}
      </div>
    )
  }

  handleOnClickPlay = () => {
    this.setState({ onClickButtonPlay: true })
    this.startGame()
  }

  startGame = () => {
    const { Player1, Player2 } = this.state
    const player1Name = Player1 || 'Player 1'
    const player2Name = Player2 || 'Player 2'
    if (!Player1 || !Player2) {
      this.setState({
        Player1: player1Name,
        Player2: player2Name,
      })
    }

    const newGame = new TennisGame(player1Name, player2Name)
    this.setNewGame(newGame)
  }
  setNewGame = (newGame: TennisGame) => {
    this.setState({ game: newGame, scoresHistory: newGame.getScoreHistory() })
  }

  setPlayer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const playerName = event.target.value
    this.setState({ Player1: playerName })
  }

  setPlayer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const playerName = event.target.value
    this.setState({ Player2: playerName })
  }
  handleOnWonpointPlayer1 = (event: React.MouseEvent<HTMLElement>) => {
    if (this.state.game) {
      this.state.game.wonPoint(this.state.Player1)
      this.setState({ scoresHistory: this.state.game.getScoreHistory() })
    }
  }
  handleOnWonpointPlayer2 = (event: React.MouseEvent<HTMLElement>) => {
    if (this.state.game) {
      this.state.game.wonPoint(this.state.Player2)
      this.setState({ scoresHistory: this.state.game.getScoreHistory() })
    }
  }
  initPageAndReset = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      onClickButtonPlay: false,
      Player1: '',
      Player2: '',
      game: null,
      scoresHistory: [],
    })
  }
}

export default App
