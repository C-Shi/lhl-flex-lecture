import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result'

describe('Result should display proper info', () => {
    test('Should display waiting message when status is waiting', () => {
        const { container } = render(<Result status="Waiting"/>)

        expect(getByTestId(container, 'result-status')).toHaveTextContent('Waiting for your selection')
    })

    test('Should have a restart button when status is not Waiting', () => {
        const { container } = render(<Result status="Tied"/>)

        expect(getByTestId(container, 'result-restart')).toHaveTextContent('Restart')
    })

    test('A props function restartGame will call if button is clicked', () => {
        
        const mockGame = {
            playerChoice: 'Rock',
            computerChoice: 'Paper',
            status: 'Win'
        }

        const mockClick = jest.fn(() => {
            mockGame.playerChoice = ''
            mockGame.computerChoice = ''
            mockGame.status = 'Waiting'
        })

        const { container } = render(<Result status={mockGame.status}restartGame={mockClick} />)
        const button = getByTestId(container, "result-restart");

        fireEvent.click(button)

        expect(mockClick).toHaveBeenCalled()

        expect(mockGame.status).toBe('Waiting')
    })
})