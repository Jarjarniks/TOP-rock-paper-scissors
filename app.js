const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

const playerWin = function(playerPoints) {
    playerPoints += 1
}

const playerLoss = function(computerPoints) {
    computerPoints += 1
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                playerWin()
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "rock") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss()
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerWin()
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "paper") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss()
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerWin()
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "scissor") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss()
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i} begins!`)
        playRound(playerSelection, computerSelection);
    }

}

const playerSelection = "scissor";
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerSelection);

game();