import { resetCounter, wrapper, quiz, resultHeading, overallCounter, wrongCounter, correctCounter } from './var.js'
import { generatOuastion } from './Heading.js'

function showResult() {
    wrapper.classList.remove('hide')
    quiz.classList.add('hide')
    resultHeading.classList.remove('hide')
    resultHeading.innerText = 'yo'
    resultHeading.innerText = `overall answers: ${overallCounter}, correct: ${correctCounter}, wrong ${wrongCounter} `
}

function startQuiz() {
    resetCounter()
    wrapper.classList.add('hide')
    quiz.classList.remove('hide')
    generatOuastion()
    setTimeout(showResult, 10000)
}

export { startQuiz }
