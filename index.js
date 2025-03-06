let currentScore = 0;
let upTest = document.getElementById("score-home");

upTest.innerText = currentScore;

function upOne() {
	currentScore += 1;
	upTest.innerText = currentScore;
}