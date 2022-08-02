export default function Result(props) {
  return (
    <div className="result">
      { props.status === 'Waiting' ? 
        <h2 data-testid="result-status">Waiting for your selection</h2> : 
        <>
          <h2 data-testid="result-status">{props.status}</h2>
          <button onClick={props.restartGame} data-testid="result-restart">Restart</button>
        </>
        }
    </div>
  )
}