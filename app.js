let playerChoice;
const playerPrompt = () => {
    playerChoice = prompt("Throw paper, scissors, or rock");
    playerChoice = playerChoice.toLowerCase();
}
playerPrompt();

// Computer's choice
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomNumber) {
        case 0:
            computerChoice = "paper";
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "rock";
            break;
        default:
            console.warn("Something went wrong generating the computers choice.");
    }
    return computerChoice;
}


const randomGamemode = () => {
    const playerThrew = computerPlay() // Selects a random choice for the player
    const computerSelection = computerPlay();

    if (playerThrew === "paper") { // Execute if player throws 'paper'
        switch (computerSelection) {
            case "rock":
                return `You won! You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            case "scissors":
                return `You lost :( You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerChoice}`;
        }
    }

    if (playerThrew === "scissors") { // Execute if player throws 'scissors'
        switch (computerSelection) {
            case "paper":
                return `You won! You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            case "rock":
                return `You lost :( You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerThrew}`;
        }
    }
    
    if (playerThrew === "rock") { // Execute if player throws 'rock'
        switch (computerSelection) {
            case "scissors":
                return `You won! You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            case "paper":
                return `You lost :( You threw ${playerThrew} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerThrew}`;
        }
    }
}


const playRound = () => {
    const computerSelection = computerPlay();

    if (playerChoice === "fuck you" || playerChoice === "fuck u" || playerChoice === "bitch" || playerChoice === "i hate you" || playerChoice === "die") {
        alert("Fuck you too");
        playerPrompt();
    }

    if (playerChoice === "random") {
        return randomGamemode();
    } else if (!(playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock")) {
        alert('You must choose "paper", "scissors", or "rock".      HINT: enter "random"' );
        playerPrompt();
    }

    if (playerChoice === "paper") { // Execute if player throws 'paper'
        switch (computerSelection) {
            case "rock":
                return `You won! You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            case "scissors":
                return `You lost :( You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerChoice}`;
        }
    }

    if (playerChoice === "scissors") { // Execute if player throws 'scissors'
        switch (computerSelection) {
            case "paper":
                return `You won! You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            case "rock":
                return `You lost :( You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerChoice}`;
        }
    }
    
    if (playerChoice === "rock") { // Execute if player throws 'rock'
        switch (computerSelection) {
            case "scissors":
                return `You won! You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            case "paper":
                return `You lost :( You threw ${playerChoice} and the computer threw ${computerSelection}.`;
                break;
            default:
                return `The game was a draw. You both threw ${playerChoice}`;
        }
    }
}

const game = (gameCount) => {
    console.log(`You have requested to play ${gameCount} games of Paper Scissors Rock:`);
    console.log(" ");
    for (let i = 0; i <= gameCount; i++) {
        console.log(playRound());
    }
}

game(10);