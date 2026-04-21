window.onload = () => {

     // 🔐 Auth check
    if (!localStorage.getItem("username")) {
        window.location.href = "login.html";
    }

    const finalScore = document.getElementById('finalScore');
    const progressCircle = document.querySelector('.progress');
    const scoreText = document.getElementById('scoreText');
    const saveBtn = document.getElementById('saveBtn');

    const mostRecentScore = Number(localStorage.getItem('mostRecentScore')) || 0;
    const TOTAL_QUESTIONS = 5;
    const MAX_SCORE = 50;

    const correctAnswers = mostRecentScore / 10;
    finalScore.innerText = `You got ${correctAnswers} / ${TOTAL_QUESTIONS} correct`;

    // 🔵 Circular progress
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;

    const percent = (mostRecentScore / MAX_SCORE) * 100;
    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progressCircle.style.strokeDashoffset = offset;
        scoreText.innerText = `${Math.round(percent)}%`;
    }, 300);

    // 🎯 Save progress button
    saveBtn.addEventListener('click', saveProgress);

    function saveProgress() {
    const userId = localStorage.getItem('userId');
    const lang = localStorage.getItem('currentLang');
    const topic = localStorage.getItem('currentTopic');
    const level = parseInt(localStorage.getItem('currentLevel'));

    console.log(userId, lang, topic, level);

    if (!userId || !lang || !topic || !level) {
        alert("Missing data! Please login again.");
        return;
    }
    console.log('Saving:', { userId, lang, topic, level, score: mostRecentScore });

    fetch('http://localhost:3000/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId,
            lang,
            topic,
            level,
            score: mostRecentScore
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            saveBtn.disabled = true;       // ✅ prevent double-save
            saveBtn.innerText = "Saved ✓";
        }else {
            alert("Save failed: " + data.error);
         }
    })
    .catch(() => {
        alert("Server error!");
    });
}
};

// 🚪 Logout
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}