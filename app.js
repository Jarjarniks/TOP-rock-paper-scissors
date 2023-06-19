import resultMsg from './resultMessage.js';
const resultMessage = new resultMsg();

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

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                playerPoints = playerWin(playerPoints)
                console.log(resultMessage.win(playerSelection, computerSelection));
            } else if (computerSelection === "rock") {
                console.log(resultMessage.draw(playerSelection));
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(resultMessage.lose(playerSelection, computerSelection));
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerPoints = playerWin(playerPoints)
                console.log(resultMessage.win(playerSelection, computerSelection));
            } else if (computerSelection === "paper") {
                console.log(resultMessage.draw(playerSelection));
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(resultMessage.lose(playerSelection, computerSelection));
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerPoints = playerWin(playerPoints)
                console.log(resultMessage.win(playerSelection, computerSelection));
            } else if (computerSelection === "scissor") {
                console.log(resultMessage.draw(playerSelection));
            } else {
                computerPoints = playerLoss(computerPoints)
                console.log(resultMessage.lose(playerSelection, computerSelection));
            }
            break;
    }
    console.log(playerPoints, computerPoints);
    return {playerPoints, computerPoints}

}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i} begins!`)

        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection, playerPoints, computerPoints);
        playerPoints = result.playerPoints;
        computerPoints = result.computerPoints;
    }
    console.log(`Out of 5 rounds, you got ${playerPoints} points!`)

    if (playerPoints > computerPoints) {
        console.log('You win!')
    } else if (playerPoints === computerPoints) {
        console.log('It is a tie!')
    } else {
        console.log('You lose.')
    }
}

game();