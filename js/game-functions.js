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

const game = (gameCount = 1) => {
    (gameCount === 1) ? console.log(`You have requested to play ${gameCount} game of Paper Scissors Rock:`) :
    console.log(`You have requested to play ${gameCount} games of Paper Scissors Rock:`);   
    
    console.log(" ");
    for (let i = 1; i <= gameCount; i++) {
        console.log(playRound());
    }
}

game(1);