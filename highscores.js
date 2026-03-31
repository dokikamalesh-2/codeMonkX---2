const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

document.getElementById('resetScores').addEventListener('click', () => {
    localStorage.removeItem('highScores');
     location.reload();  
});

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");