import { useEffect, useState } from "react"

export default function Player (props) {
  const [choice, setChoice] = useState('Rock')

  useEffect(() => {
    if (props.status === 'Waiting') {
      setChoice('Rock')
    }
  }, [props.status])

  const confirmHandler = () => {
    props.playerPick(choice)
  }
  return (
    <div className="Player">
      <h2>Player</h2>
      <select onChange={(e) => setChoice(e.target.value)} value={choice} disabled={props.status !== 'Waiting'}>
        <option value="Rock">Rock 🗿</option>
        <option value="Paper">Paper 📃</option>
        <option value="Scissor">Scissor ✂️</option>
      </select>
      <button onClick={confirmHandler} disabled={props.status !== 'Waiting'}>Confirm</button>
    </div>
  )
}