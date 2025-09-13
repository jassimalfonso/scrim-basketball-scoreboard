let homeCount = 0;

const homeScoreEl = document.getElementById("home-score");
const homeAddOneButton = document.getElementById("home-add-one");
const homeAddTwoButton = document.getElementById("home-add-two");
const homeAddThreeButton = document.getElementById("home-add-three");
const newGameButton = document.getElementById("new-game-button");

homeAddOneButton.addEventListener("click", function() {
    homeCount++;
    homeScoreEl.textContent = homeCount;
});
homeAddTwoButton.addEventListener("click", function() {
    homeCount += 2;
    homeScoreEl.textContent = homeCount;
});
homeAddThreeButton.addEventListener("click", function() {
    homeCount += 3;
    homeScoreEl.textContent = homeCount;
});


let awayCount = 0;

const awayScoreEl = document.getElementById("away-score");
const awayAddOneButton = document.getElementById("away-add-one");
const awayAddTwoButton = document.getElementById("away-add-two");
const awayAddThreeButton = document.getElementById("away-add-three");

awayAddOneButton.addEventListener("click", function() {
    awayCount++;
    awayScoreEl.textContent = awayCount;
});
awayAddTwoButton.addEventListener("click", function() {
    awayCount += 2;
    awayScoreEl.textContent = awayCount;
});
awayAddThreeButton.addEventListener("click", function() {
    awayCount += 3;
    awayScoreEl.textContent = awayCount;
});

newGameButton.addEventListener("click", function() {
    homeCount = 0;
    homeScoreEl.textContent = homeCount;
    awayCount = 0;
    awayScoreEl.textContent = awayCount;
});