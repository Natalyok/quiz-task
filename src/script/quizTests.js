import { buttons, incCorrect, incOverall, incWrong, answer } from "./var.js"
import { generatOuastion } from './Heading.js'
import { getRandomInt } from './getRandomInt.js'

function countAnswers(button) {
    return function () {
        incOverall()

        if (String(answer) === button.innerText) {
            incCorrect()
        } else {
            incWrong()
        }
    }
}

function generateCorrectButton(answer) {
    buttons.forEach((button) => {
        button.addEventListener('click', generatOuastion)

        let value = getRandomInt(100)
        while (value === answer) {
            value = getRandomInt(100)
        }
        button.innerText = value
        button.classList.remove('correct-button')
        button.classList.add('wrong-button')
    })

    const index = getRandomInt(buttons.length)
    const correctButton = buttons[index]
    correctButton.innerText = answer
    correctButton.classList.remove('wrong-button')
    correctButton.classList.add('correct-button')
}

buttons.forEach((button) => {
    button.addEventListener('click', countAnswers(button))
})

export { buttons, generateCorrectButton }