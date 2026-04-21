const highScoresList = document.getElementById("highScoresList");
const resetBtn = document.getElementById("resetScores");

//load leaderboard from backend
async function loadLeaderboard() {
    try{
        const res = await fetch('http://localhost:3000/leaderboard');
        const scores = await res.json();
        highScoresList.innerHTML = scores
            .map(score => {
                return `<li class="high-score">${score.username} - ${score.score}</li>`;
            })
            .join('');

    } 
    catch (err) {
        console.error(err);
    }
}

//  reset scores from backend
resetBtn.addEventListener('click', async () => {
    try{
        await fetch('http://localhost:3000/delete-scores', {
            method: 'DELETE'
        });

        loadLeaderboard(); // refresh UI

    } 
    catch (err) {
        console.error(err);
    }
});


loadLeaderboard();