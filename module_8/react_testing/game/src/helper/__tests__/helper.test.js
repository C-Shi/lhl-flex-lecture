import { checkGame, findIcon, randomSelection } from '../helper';

describe('test random selection', () => {
  test('random selection will pick anything with rock paper scissor', () => {
    const options = ['rock', 'paper', 'scissor'];
    const result = randomSelection(options);

    expect(options).toContain(result)
  })
})

describe('test find Icon', () => {
  test('Rock will return 🗿', () => {
    const result = findIcon('Rock');

    expect(result).toBe('🗿')
  })

  test('Paper will return 📃', () => {
    const result = findIcon('Paper')

    expect(result).toBe('📃')
  })

  test('Scissor will return ✂️', () => {
    const result = findIcon('Scissor')

    expect(result).toBe('✂️')
  })

  test('Otherwise return undefined', () => {
    const result = findIcon('Water')

    expect(result).toBeUndefined()
  })
})

describe('test check game', () => {
  test('player Rock computer Paper will return lost', () => {
    expect(checkGame({
      playerChoice: 'Rock',
      computerChoice: 'Paper'
    })).toBe('Lost')
  })
})