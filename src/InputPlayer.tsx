import React from 'react'

interface Props {
  player: string
  setPlayerX: (event: React.ChangeEvent<HTMLInputElement>) => void
  PlayerX: string
}

const InputPlayer: React.FC<Props> = props => {
  const { player, setPlayerX, PlayerX } = props
  return (
    <div className="container_playerX">
      <label className="label_player">{player}</label>
      <input
        value={PlayerX}
        type="text"
        name={player}
        className="input"
        onChange={setPlayerX}
      />
    </div>
  )
}
export default InputPlayer
