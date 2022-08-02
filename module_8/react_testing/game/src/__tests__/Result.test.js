/* eslint-disable testing-library/prefer-screen-queries */
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result'

test('shows appropriate message when game is waiting', () => {
  const { container } = render(<Result status='Waiting' />)
  expect(getByTestId(container, 'result-status')).toHaveTextContent("Waiting for your selection")
})

test('shows appropriate message when game is completed', () => {
  const { getByTestId } = render(<Result status='Win' />)
  expect(getByTestId('result-status')).toHaveTextContent("Win")
})

// Mocking and Event Firing
test('call restartGame prop when button clicked', () => {
  const mockClick = jest.fn()
  const { getByTestId } = render(<Result status='Win' restartGame={mockClick} />)

  const button = getByTestId("result-restart")
  fireEvent.click(button)

  expect(mockClick).toHaveBeenCalled()
})