const quizData = [
    {
        question: 'In JavaScript everything is an?',
        a: 'Awsome time',
        b: 'Iteration',
        c: 'Object',
        d: 'Array',
        correct: 'c'
    }, {
        questiion: 'When was JavaScript launched?',
        a: '1997',
        b: '1995',
        c: '1776',
        d: '2005',
        correct: 'b'
    }, {
        questiion: 'JavaScript default behavior of moving declarations to the top is called?',
        a: 'const',
        b: 'scope',
        c: 'debugging',
        d: 'hoisting',
        correct: 'd'
    }, {
        question: 'When used alone, this keyword, refers to?',
        a: 'A window',
        b: 'A condition',
        c: 'Global Object',
        d: 'An error',
        correct: 'c'
    }, {
        question: 'which is not a JavaScript framework?',
        a: 'Python Script',
        b: 'JQuery',
        c: 'Django',
        d: 'NojeJS',
        correct: 'c'

    }

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll
('.answer');
const questionEl = document.getElementById
('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById
('submit');

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].
        correct) {
            score++;
        }
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();  
        } else {
                quiz.innerHTML = `<h2>Your correct answers ${score}/${quizData.length}</h2>`;
        }
        
        
    }
});