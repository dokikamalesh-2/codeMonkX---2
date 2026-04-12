const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const timerText = document.getElementById('timer');
let timerInterval;
let timeLeft = 15;
const TIMER_SECONDS = 15;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch('http://localhost:3000/questions')
    .then((res) => res.json())
    .then((loadedQuestions) => {
        console.log(loadedQuestions);
        questions = loadedQuestions.map((q) => {
            const formattedQuestion = {
                question: q.question,
            };

            // shuffle options
            const answerChoices = [...q.options];

            formattedQuestion.answer = answerChoices.indexOf(q.answer) + 1;
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
    startTimer(); 
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        stopTimer();

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // if correct, increase score
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        // mark the selected option
        selectedChoice.parentElement.classList.add(classToApply);

        //  show the correct answer if user was wrong
        if (classToApply === 'incorrect') {
            choices.forEach((choice) => {
                if (choice.dataset['number'] == currentQuestion.answer) {
                    choice.parentElement.classList.add('correct');
                }
            });
        }

        setTimeout(() => {
            // remove all highlight classes before next question
            choices.forEach((choice) => {
                choice.parentElement.classList.remove('correct', 'incorrect');
            });
            getNewQuestion();
        }, 1000);
    });
});

startTimer = () => {
    timeLeft = TIMER_SECONDS;
    timerText.innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSkipQuestion();
        }
    }, 1000);
};

stopTimer = () => {
    clearInterval(timerInterval);
};

autoSkipQuestion = () => {
    acceptingAnswers = false;

    // show correct answer
    choices.forEach((choice) => {
        if (choice.dataset['number'] == currentQuestion.answer) {
            choice.parentElement.classList.add('correct');
        }
    });

    setTimeout(() => {
        choices.forEach((choice) => {
            choice.parentElement.classList.remove('correct', 'incorrect');
        });
        getNewQuestion();
    }, 1000);
};


incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};