const start = document.querySelector('.start-button')
const wrapper = document.querySelector('.start-wrapper')
const quiz = document.querySelector('.quiz-wrapper')
const resultHeading = document.querySelector('.result-heading')
const questionHeading = document.querySelector('.question-heading')

let answer = 0

const buttons = document.querySelectorAll(".answer-row button")

let overallCounter = 0
let correctCounter = 0
let wrongCounter = 0

function resetCounter() {
    overallCounter = 0
    correctCounter = 0
    wrongCounter = 0
}

function incOverall() {
    overallCounter += 1
}

function incCorrect() {
    correctCounter += 1
}

function incWrong() {
    wrongCounter += 1
}

function updateAnswer(result) {
    answer = result
}

export {
    start,
    wrapper,
    quiz,
    resultHeading,
    answer,
    questionHeading,
    buttons,
    resetCounter,
    incCorrect,
    incOverall,
    incWrong,
    updateAnswer,
    overallCounter,
    wrongCounter,
    correctCounter
}