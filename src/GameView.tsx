import * as React from 'react'
import InputPlayerWonPoint from './InputPlayerWonPoint'

interface Props {
  Player1: string
  Player2: string
  scoresHistory: string[]
  onWonPointPlayer1: (event: React.MouseEvent<HTMLElement>) => void
  onWonPointPlayer2: (event: React.MouseEvent<HTMLElement>) => void
  initPageAndReset: (event: React.MouseEvent<HTMLElement>) => void
}

const GameView = (props: Props) => {
  const {
    Player1,
    Player2,
    scoresHistory,
    onWonPointPlayer1,
    onWonPointPlayer2,
    initPageAndReset,
  } = props
  return (
    <main className="App-mainContainer">
      <div className="container_players">
        <InputPlayerWonPoint
          PlayerX={Player1}
          onWonPointPlayerX={onWonPointPlayer1}
        ></InputPlayerWonPoint>

        <ul className="list-scores">
          {scoresHistory.map((scores, index) => {
            return <li key={index}>{scores}</li>
          })}
        </ul>
        <InputPlayerWonPoint
          PlayerX={Player2}
          onWonPointPlayerX={onWonPointPlayer2}
        ></InputPlayerWonPoint>
      </div>
      <button className="btn_newGame" onClick={initPageAndReset}>
        New game!
      </button>
    </main>
  )
}

export default GameView
