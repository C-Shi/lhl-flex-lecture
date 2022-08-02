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

// test check game