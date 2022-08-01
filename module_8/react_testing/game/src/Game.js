import { useEffect, useState } from 'react'
import Player from './Player'
import Computer from './Computer'
import { checkGame, randomSelection } from './helper/helper'

export default function Game() {
  const [game, setGame] = useState({
    playerChoice: '',
    computerChoice: '',
    status: 'Waiting'
  })

  useEffect(() => {
    restartGame()
  }, [])

  useEffect(() => {
    if (game.playerChoice && game.computerChoice) {
      const status = checkGame(game)
      setGame(prev => {
        return {...prev, status}
      })
    }
  }, [game.playerChoice, game.computerChoice])

  const playerPick = (choice) => {
    setGame(prev => {
      return {...prev, playerChoice: choice}
    })
  }

  const restartGame = () => {
    const options = ['Rock', 'Paper', 'Scissor'];
    const computerChoice = randomSelection(options);
    setGame({
      playerChoice: '',
      computerChoice,
      status: 'Waiting'
    })
  }

  return (
    <>
      <div className="game">
        <Computer status={game.status} choice={game.computerChoice} />
        <Player playerPick={playerPick} status={game.status}/>
      </div>
      { game.status === 'Waiting' ? 
        <></> : 
        <div className="result">
          <h2>{game.status}</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      }
    </>
  )
}