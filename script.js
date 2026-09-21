let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");

attackButton.addEventListener("click", addPoint);

// TODO: create addPoint()
function addPoint() {
    score++;
    updateDisplay();
}
// TODO: create resetGame()
function resetGame() {
    score = 0;
    title.innerText = "Click Attack";
    updateDisplay();
}

function updateDisplay() {
    scoreDisplay.innerText = score;

    if (score >= 20) {
        title.innerText = "YOU WIN!";
    }
}

const powerButton = document.createElement("button");
powerButton.innerText = "Power Attack (+5) ";
document.body.appendChild(powerButton);

function powerAttack() {
    score +=5;
    updateDisplay();
}

// TODO: connect both functions to buttons
attackButton.addEventListener("click", addPoint);
powerButton.addEventListener("click", powerAttack);
resetButton.addEventListener("click", resetGame);
