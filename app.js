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

function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "rock") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss(computerPoints)
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "paper") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss(computerPoints)
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "scissor") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                playerLoss(computerPoints)
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
        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();