export function randomSelection(options) {
  const index = Math.floor(Math.random() * options.length) ;

  return options[index]
}

export function findIcon(choice) {
  switch(choice) {
    case 'Rock':
      return '🗿';
    case 'Paper':
      return '📃';
    case 'Scissor':
      return '✂️';
    default:
  }
}

export function checkGame(game) {
  if (!game.playerChoice || !game.computerChoice) {
    return 'Waiting';
  }
  if (game.computerChoice === game.playerChoice) {
    return 'Tied';
  }

  if (game.playerChoice === 'Rock') {
    if (game.computerChoice === 'Paper') {
      return 'Lost'
    } else {
      return 'Win'
    }
  }

  if (game.playerChoice === 'Paper') {
    if (game.computerChoice === 'Rock') {
      return 'Win'
    } else {
      return 'Lost'
    }
  }

  if (game.playerChoice === 'Scissor') {
    if (game.computerChoice === 'Rock') {
      return 'Lost'
    } else {
      return 'Win'
    }
  }

}