import { fireEvent, render } from '@testing-library/react'
import App from './App'

test('start a game generate a new calculation', () => {
    const main = render(<App />)
    const startButton = main.container.querySelector(".start-button")
    fireEvent.click(startButton)

    expect(main.container.querySelector(".home-text")).toBeFalsy()
    expect(main.container.querySelector(".generated-calculation")).toBeTruthy()
})

test('when the time is at 0, the game is stopped and everything gets a reset', () => {

})

test('if the user answer is right, the score gets incremented and a new calculation is generated', () => {

})

test('if the user is wrong, the score doesnt change and a new calculation is generated', () => {

})
