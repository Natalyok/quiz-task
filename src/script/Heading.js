import { getRandomInt } from './getRandomInt.js'
import { updateAnswer, answer, questionHeading } from './var.js'
import { generateCorrectButton } from './quizTests.js'

function lol() {
    if (getRandomInt(2) === 0) {
        return '-'
    } else {
        return '+'
    }

}

function generatOuastion() {
    const number1 = getRandomInt(50)
    const number2 = getRandomInt(50)
    const sign = lol()


    if (sign === '+') {
        updateAnswer(number1 + number2)
    } else {
        updateAnswer(number1 - number2)
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`
    generateCorrectButton(answer)
}

export { generatOuastion }