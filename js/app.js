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

    // fires when .screen-fade transition ends because it's faster
    // than the .play-button transition
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

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

const playRound = (e) => {
    const computerSelection = getComputerSelection(); // Gets computers choice

    // applies bg colour to selected choice
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
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`
                console.log("you lost a point");
                break;

            case "rock":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`
                console.log("you gained a point");
                break;
        }
    }

    if (e.target.classList.contains("scissors")) {
        switch (computerSelection) {
            case "rock":
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`
                console.log("you lost a point");
                break;

            case "paper":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`
                console.log("you gained a point");
                break;
        }
    }

    if (e.target.classList.contains("rock")) {
        switch (computerSelection) {
            case "paper":
                computerScoreText.textContent = `SCORE: ${++initialComputerScore}`
                console.log("you lost a point");
                break;

            case "scissors":
                playerScoreText.textContent = `SCORE: ${++initialPlayerScore}`
                console.log("you gained a point");
                break;
        }
    }


}

addEventListenerList(playerChoices, "click", (e) => {
    // applies bg colour to selected choice
    e.target.classList.add("selected");

    // removes bg colour from other choices
    playerChoices.forEach(index => {
        if (!(index == e.target)) {
            index.classList.remove("selected")
        }
    });

    playRound(e);
})

