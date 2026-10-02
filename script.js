let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");

attackButton.addEventListener("click", addPoint);

console.log(attackValueInput.value);
console.log(getAttackValue() + 5);

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

    function getAttackValue() {
        const rawValue = attackValueInput.value.trim();

        if (rawValue === "") {
            message.innerText = "Please enter a valid number."; //checking that a num has been entered
            return null;
        }
        const attackValue = Number(rawValue);
        if (Number.isNaN(attackValue)) {
            message.innerText = "Please enter a valid number.";
            return null;
        }
        if (attackValue < 1 || attackValue > 10) {
            message.innerText = "Choose an attack value from 1 to 10.";  //attack value multiplier on click
            return null;
        }
        return attackValue;
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
