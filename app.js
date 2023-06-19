const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

const playerWin = function(playerPoints) {
    playerPoints += 1
    return playerPoints
}

const playerLoss = function(computerPoints) {
    computerPoints += 1
    return computerPoints
}

function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerPoints, computerPoints);

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                playerPoints = playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "rock") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerPoints = playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "paper") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerPoints = playerWin(playerPoints)
                console.log(`Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`);
            } else if (computerSelection === "scissor") {
                console.log(`Both participants used ${playerSelection} - this round is a draw`)
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(`Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`);
            }
            break;
    }

    return {playerPoints, computerPoints}

}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i} begins!`)

        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection, playerPoints, computerPoints);
    }
    console.log(`Out of 5 rounds, you got ${playerPoints} points!`)

    if (playerPoints > computerPoints) {
        console.log('You win!')
    } else {
        console.log('You lose.')
    }
}

game();