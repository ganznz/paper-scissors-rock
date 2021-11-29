// -- VARIABLES -- //
const startScreenDiv = document.querySelector(".start-screen");
const startPlayButton = document.querySelector(".play-button");

const playerChoices = document.querySelectorAll(".player-choice");
const computerChoices = document.querySelectorAll(".computer-choice");

let playerScoreText = document.querySelector(".player-score");
let initialPlayerScore = 0;
let computerScoreText = document.querySelector(".computer-score");
let initialComputerScore = 0;


// Start menu fadeout
startPlayButton.addEventListener("click", () => {
    startScreenDiv.classList.add("screen-fade")

    startScreenDiv.addEventListener("transitionend", () => {
        startScreenDiv.remove();
    })
});


// Computer's choice
const getComputerSelection = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "paper";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "rock";
            break;
        default:
            console.warn("Something went wrong generating the computers choice.");
    }
    return computerChoice;
}

const playRound = (e) => {
    const computerSelection = getComputerSelection(); // Gets computers choice

    // apply bg colour to selected choice
    computerChoices.forEach(index => {
        if (index.classList.contains(computerSelection)) {
            index.classList.add("selected");
        }

        if (!(index.classList.contains(computerSelection))) {
            index.classList.remove("selected");
        }
    });

    if (e.target.classList.contains("paper")) {
        switch (computerSelection) {
            case "scissors":
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`;
                break;

            case "rock":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`;
                break;
        }
    }

    if (e.target.classList.contains("scissors")) {
        switch (computerSelection) {
            case "rock":
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`;
                break;

            case "paper":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`;
                break;
        }
    }

    if (e.target.classList.contains("rock")) {
        switch (computerSelection) {
            case "paper":
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`;
                break;

            case "scissors":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`;
                break;
        }
    }
}

// function that iterates an event over a nodelist
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

addEventListenerList(playerChoices, "click", (e) => {
    // apply bg colour to selected choice
    e.target.classList.add("selected");

    // remove bg colour from other choices
    playerChoices.forEach(index => {
        if (!(index == e.target)) {
            index.classList.remove("selected")
        }
    });

    playRound(e);
    
    if (initialPlayerScore >= 5 || initialComputerScore >= 5) {
        if (initialPlayerScore > initialComputerScore) {
          createEndScreen(`You won lesgooo! The score was ${initialPlayerScore} - ${initialComputerScore}`);  
        } else {
            createEndScreen(`You lost LLLL! The score was ${initialPlayerScore} - ${initialComputerScore}`);
        }
    }
});

const createEndScreen = (resultText) => {
    const body = document.querySelector("body");
    const gameContainer = document.querySelector(".game-container")

    const div = document.createElement("div");
    div.classList.add("end-screen");

    const h1 = document.createElement("h1");
    h1.classList.add("game-result-text");
    h1.textContent = resultText;

    const button = document.createElement("button");
    button.classList.add("replay-button");
    button.textContent = "PLAY AGAIN!";

    div.appendChild(h1);
    div.appendChild(button);
    body.insertBefore(div, gameContainer);
};

const resetGame = () => {
    initialPlayerScore = 0;
    initialComputerScore = 0;
    playerScoreText.textContent = `SCORE: ${initialPlayerScore}`;
    computerScoreText.textContent = `SCORE: ${initialComputerScore}`;
    
    playerChoices.forEach(index => { // resets player choices bg colours
        index.classList.remove("selected")
    });

    computerChoices.forEach(index => { // resets player choices bg colours
        index.classList.remove("selected")
    });
};

document.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("replay-button")) {
        const endScreenDiv = document.querySelector(".end-screen");
        resetGame();

        endScreenDiv.classList.add("screen-fade");
        endScreenDiv.addEventListener("transitionend", () => {
            endScreenDiv.remove();
        })
    }
});