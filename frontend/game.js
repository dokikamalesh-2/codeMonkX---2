// ── Auth + Flow Protection ──
if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
}

const lang  = localStorage.getItem('currentLang');
const topic = localStorage.getItem('currentTopic');
const level = localStorage.getItem('currentLevel');

if (!lang || !topic || !level) {
  window.location.href = "levels.html";
}

// ── DOM Elements ──
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const timerText = document.getElementById('timer');

// ── Variables ──
let timerInterval;
let timeLeft = 15;
const TIMER_SECONDS = 15;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

// ── Show loader initially ──
loader.classList.remove('hidden');
game.classList.add('hidden');

// ── Fetch Questions ──
fetch(`http://localhost:3000/api/questions?lang=${encodeURIComponent(lang)}&topic=${encodeURIComponent(topic)}&level=${level}`)
  .then(res => res.json())
  .then(loadedQuestions => {
    if (!Array.isArray(loadedQuestions) || loadedQuestions.length === 0) {
      alert("No questions found for this level");
      return window.location.href = "levels.html";
    }

    questions = loadedQuestions.map(q => {
      const formattedQuestion = { question: q.question };

      const shuffled = [...q.options].sort(() => Math.random() - 0.5);
      formattedQuestion.answer = shuffled.indexOf(q.correct_answer) + 1;

      shuffled.forEach((opt, i) => {
        formattedQuestion['choice' + (i + 1)] = opt;
      });

      return formattedQuestion;
    });

    startGame();
  })
  .catch(() => {
    alert("Failed to load questions");
    window.location.href = "levels.html";
  });

// ── Start Game ──
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  loader.classList.add('hidden');
  game.classList.remove('hidden');

  getNewQuestion();
}

// ── Load New Question ──
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {

    // Save results
    localStorage.setItem('mostRecentScore', score);
    localStorage.setItem('totalQuestions', MAX_QUESTIONS);
    localStorage.setItem('correctAnswers', score / CORRECT_BONUS);

    const accuracy = (score / (MAX_QUESTIONS * CORRECT_BONUS)) * 100;
    localStorage.setItem('accuracy', accuracy);

    return window.location.assign('end.html');
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    choice.innerText = currentQuestion['choice' + choice.dataset['number']];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

  startTimer();
}

// ── Handle Answer Click ──
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    stopTimer();

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // Highlight correct answer if wrong
    if (classToApply === 'incorrect') {
      choices.forEach(c => {
        if (c.dataset['number'] == currentQuestion.answer) {
          c.parentElement.classList.add('correct');
        }
      });
    }

    setTimeout(() => {
      choices.forEach(c => c.parentElement.classList.remove('correct', 'incorrect'));
      getNewQuestion();
    }, 1000);
  });
});

// ── Timer ──
function startTimer() {
  timeLeft = TIMER_SECONDS;
  timerText.innerText = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = 0;
      timerText.innerText = timeLeft;
      clearInterval(timerInterval);
      autoSkipQuestion();
    } else {
      timerText.innerText = timeLeft;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// ── Auto Skip ──
function autoSkipQuestion() {
  acceptingAnswers = false;

  choices.forEach(c => {
    if (c.dataset['number'] == currentQuestion.answer) {
      c.parentElement.classList.add('correct');
    }
  });

  setTimeout(() => {
    choices.forEach(c => c.parentElement.classList.remove('correct', 'incorrect'));
    getNewQuestion();
  }, 1000);
}

// ── Score ──
function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
}