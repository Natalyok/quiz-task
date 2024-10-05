const start = document.querySelector('.start-button')
const wrapper = document.querySelector('.start-wrapper')
const quiz = document.querySelector('.quiz-wrapper')
const questionHeading = document.querySelector('.question-heading')
const resultHeading = document.querySelector('.result-heading')

let overallCounter = 0
let correctCounter = 0
let wrongCounter = 0
let answer = 0

const buttons = document.querySelectorAll(".answer-row button")

buttons.forEach((button) => {
    button.addEventListener('click', countAnswers(button))
})

function countAnswers(button) {
    return function () {
        overallCounter += 1

        if (String(answer) === button.innerText) {
            correctCounter += 1
        } else {
            wrongCounter += 1
        }
    }
}


function showResult() {
    wrapper.classList.remove('hide')
    quiz.classList.add('hide')
    resultHeading.classList.remove('hide')
    resultHeading.innerText = 'yo'
    resultHeading.innerText = `overall answers: ${overallCounter}, correct: ${correctCounter}, wrong ${wrongCounter} `
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


function startQuiz() {
    wrapper.classList.add('hide')
    quiz.classList.remove('hide')
    generatOuastion()
    setTimeout(showResult, 10000)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
function generatOuastion() {
    const number1 = getRandomInt(50)
    const number2 = getRandomInt(50)
    const sign = lol()

    if (sign === '+') {
        answer = number1 + number2
    } else {
        answer = number1 - number2
    }

    questionHeading.innerText = `${number1} ${sign} ${number2}`
    generateCorrectButton(answer)
}
function lol() {
    if (getRandomInt(2) === 0) {
        return '-'
    } else {
        return '+'
    }

}

start.addEventListener('click', startQuiz)

