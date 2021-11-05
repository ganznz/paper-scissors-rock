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


const playRound = (playerSelection) => {
    const playerChoice = playerSelection.toLowerCase();
    const computerSelection = computerPlay();

    if (!(playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock")) {
        console.warn('Choose either "rock", "paper", or "scissors".');
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
    console.log(`You have requested to play ${gameCount} of Rock Paper Scissors:`);
    console.log(" ");
    for (let i = 0; i <= gameCount; i++) {
        console.log(playRound("Paper"));
    }
}

game(10);