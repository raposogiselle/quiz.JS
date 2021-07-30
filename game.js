const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions =[
    {
        question: 'In JavaScript everything is an?',
        choice1: 'Awsome time',
        choice2: 'Iteration',
        choice3: 'Object',
        choice4: 'Array',
        answer: '3',
    },
    {
       question: 'When was JavaScript launched?',
       choice1: '1997',
       choice2: '1995',
       choice3: '1776',
       choice4: '2005',
       answer: '2',
    },
    {
        question: 'JavaScript default behavior of moving declarations to the top is called?',
        choice1: 'const',
        choice2: 'scope',
        choice3: 'debugging',
        choice4: 'hoisting',
        answer: '4',
    },
    {
        question: 'When used alone, this keyword, refers to?',
        choice1: 'A window',
        choice2: 'A condition',
        choice3: 'Global Object',
        choice4: 'An error',
        answer: '3',
    },
    {
        question: 'which is not a JavaScript framework?',
        choice1: 'Python Script',
        choice2: 'JQuery',
        choice3: 'Django',
        choice4: 'NojeJS',
        answer: '3',
    }

]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.InnerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()








