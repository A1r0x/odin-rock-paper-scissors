let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        return 1;
    } else if (choice < 2/3) {
        return 2;
    } else {
        return 3;
    }
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Rock, paper, scissors...").toLowerCase();
        if (choice === "rock") {
            return 1;
        } else if (choice === "paper") {
            return 2;
        } else if (choice === "scissors") {
            return 3;
        } else {
            alert("Invalid input, please enter 'rock', 'paper', or 'scissors'.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("Tie!");
    } 
    let match = humanChoice * 10 + computerChoice;

    switch (match) {
        case 12:
            console.log("You lose! Paper beats Rock");
            computerScore++;
            break;
        case 13:
            console.log("You win! Rock beats Scissors");
            humanScore++;
            break;
        case 21:
            console.log("You win! Paper beats Rock");
            humanScore++;
            break;
        case 23:
            console.log("You lose! Scissors beats Paper");
            computerScore++;
            break;
        case 31:
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            break;
        case 32:
            console.log("You win! Scissors beats Paper");
            humanScore++;
            break;    
    }
    return;
}
  
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game is a tie!");
    }
}
  