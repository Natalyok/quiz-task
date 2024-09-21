const start = document.querySelector('.start-button')
const wrapper = document.querySelector('.start-wrapper')
const quiz = document.querySelector('.quiz-wrapper')
const questionHeading = document.querySelector('.question-heading')


function generateCorrectButton() {
    const buttons = document.querySelectorAll(".answer-row button")
    const index = getRandomInt(buttons.length)
    const correctButton = buttons[index]
    correctButton.innerText = 'correct'


    buttons.forEach((button) => {
        button.addEventLister('click', generateQuestion)
    })
}


function startQuiz() {
    wrapper.classList.add('hide')
    quiz.classList.remove('hide')
    generatOuastion()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
function generatOuastion() {
    const number1 = getRandomInt(50)
    const number2 = getRandomInt(50)
    const sign = lol()

    questionHeading.innerText = `${number1} ${sign} ${number2}`
    generateCorrectButton()
}
function lol() {
    if (getRandomInt(2) === 0) {
        return '-'
    } else {
        return '+'
    }

}

start.addEventListener('click', startQuiz)

