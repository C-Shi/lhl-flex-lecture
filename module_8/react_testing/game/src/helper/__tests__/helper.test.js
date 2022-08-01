import { checkGame, findIcon, randomSelection } from '../helper';

describe("randomSelection function", () => {
  let options;

  beforeAll(() => {
    options = ['Rock', 'Paper', 'Scissor'];
  })

  test('return a random selection with Rock, Paper and Scissor', () => {
    expect(options).toContain(randomSelection(options))
  })
})

describe("findIcon function", () => {
  test('return 🗿 if passing rock', () => {
    expect(findIcon('Rock')).toBe('🗿')
  })
  test('return 📃 if passing paper', () => {
    expect(findIcon('Paper')).toBe('📃')
  })
  test('return ✂️ if passing scissor', () => {
    expect(findIcon('Scissor')).toBe('✂️')
  })
})

describe("checkGame function", () => {
  test('player and computer with same choice should return tie', () => {
    const fakeGame = {
      playerChoice: 'Rock',
      computerChoice: 'Rock',
      status: 'Waiting'
    }
    expect(checkGame(fakeGame)).toBe('Tied')
  })

  test('player rock will lose to computer paper', () => {
    const fakeGame = {
      playerChoice: 'Rock',
      computerChoice: 'Paper',
      status: 'Waiting'
    }
    expect(checkGame(fakeGame) === 'Lost').toBeTruthy()
  })

  test('player rock will win to computer scissor', () => {
    const fakeGame = {
      playerChoice: 'Rock',
      computerChoice: 'Scissor',
      status: 'Waiting'
    }
    expect(checkGame(fakeGame)).toStrictEqual('Win')
  })
})