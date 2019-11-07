import * as React from 'react'
interface Props {
  PlayerX: string
  onWonPointPlayerX: (event: React.MouseEvent<HTMLElement>) => void
}

const InputPlayerWonPoint: React.FC<Props> = (props: Props) => {
  const { PlayerX, onWonPointPlayerX } = props

  return (
    <div className="container_playerX">
      <label className="label_player">{PlayerX}</label>
      <button
        type="button"
        name={PlayerX}
        className="input_wonPoint"
        onClick={onWonPointPlayerX}
      >
        Won point
      </button>
    </div>
  )
}
export default InputPlayerWonPoint
