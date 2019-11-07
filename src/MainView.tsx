import * as React from 'react'
import InputPlayer from './InputPlayer'

interface Props {
  onClickPlay: () => void
  setPlayer1: (event: React.ChangeEvent<HTMLInputElement>) => void
  setPlayer2: (event: React.ChangeEvent<HTMLInputElement>) => void
  Player1: string
  Player2: string
  // setPlayerX: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MainView: React.FC<Props> = (props: Props) => {
  const { onClickPlay, setPlayer1, setPlayer2, Player1, Player2 } = props
  return (
    <main className="App-mainContainer">
      <div className="container_players">
        <InputPlayer
          player="Player1"
          setPlayerX={setPlayer1}
          PlayerX={Player1}
        ></InputPlayer>
        <InputPlayer
          player="Player2"
          setPlayerX={setPlayer2}
          PlayerX={Player2}
        ></InputPlayer>
      </div>
      <button className="btn_play" onClick={onClickPlay}>
        Play!
      </button>
    </main>
  )
}
export default MainView
