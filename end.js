window.onload = () => {
    const username = document.getElementById('username');
    const saveScoreBtn = document.getElementById('saveScoreBtn');
    const finalScore = document.getElementById('finalScore');

    // Circle elements
    const progressCircle = document.querySelector('.progress');
    const scoreText = document.getElementById('scoreText');

    const mostRecentScore = Number(localStorage.getItem('mostRecentScore')) || 0;

    const MAX_SCORE = 50;      // 5 questions × 10 points
    const TOTAL_QUESTIONS = 5;

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const MAX_HIGH_SCORES = 5;

    // Show score text
    const correctAnswers = mostRecentScore / 10;
    finalScore.innerText = `You got ${correctAnswers} / ${TOTAL_QUESTIONS} correct`;

    // Enable save button when typing
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });

    // ===== Circular Score Logic =====
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;

    const percent = (mostRecentScore / MAX_SCORE) * 100;
    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progressCircle.style.strokeDashoffset = offset;
        scoreText.innerText = `${Math.round(percent)}%`;
    }, 300);

    // ===== Save High Score =====
    function saveHighScore(e) {
        e.preventDefault();

        const score = {
            score: mostRecentScore,
            name: username.value,
        };

        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(MAX_HIGH_SCORES);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('/home.html');
    }

    document.querySelector('form').addEventListener('submit', saveHighScore);
};
