window.onload = () => {
    const username = document.getElementById('username');
    const saveScoreBtn = document.getElementById('saveScoreBtn');
    const finalScore = document.getElementById('finalScore');

    // circle elements
    const progressCircle = document.querySelector('.progress');
    const scoreText = document.getElementById('scoreText');

    // get score from previous pages
    const mostRecentScore = Number(localStorage.getItem('mostRecentScore')) || 0;

    const MAX_SCORE = 50;      // 5 questions × 10 points
    const TOTAL_QUESTIONS = 5;

    // show score text
    const correctAnswers = mostRecentScore / 10;
    finalScore.innerText = `You got ${correctAnswers} / ${TOTAL_QUESTIONS} correct`;

    // score is saved when username is entered
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });

    // circular score 
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;

    const percent = (mostRecentScore / MAX_SCORE) * 100;
    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progressCircle.style.strokeDashoffset = offset;
        scoreText.innerText = `${Math.round(percent)}%`;
    }, 300);

    // SAVE SCORE TO BACKEND
    async function saveHighScore(e) {
        e.preventDefault();

        const usernameValue = username.value;

        try {
            await fetch('http://localhost:3000/submit-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: usernameValue,
                    score: mostRecentScore
                })
            });

            console.log("Score saved to backend");

            
            window.location.assign('home.html');

        } catch (err) {
            console.error("Error saving score:", err);
        }
    }

   
    document.querySelector('form').addEventListener('submit', saveHighScore);
};