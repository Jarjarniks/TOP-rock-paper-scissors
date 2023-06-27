import resultMsg from './resultMessage.js';
const resultMessage = new resultMsg();

const choices = ["Rock", "Paper", "Scissor"];

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorBtn.addEventListener('click', playRound);


function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

const playerWin = function(playerPoints) {
    playerPoints += 1
    return playerPoints
}

const computerWin = function(computerPoints) {
    computerPoints += 1
    return computerPoints
}

function playRound(event) {
    const playerSelection = event.target.textContent.trim('').toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    let playerPoints = 0;
    let computerPoints = 0;

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                playerPoints = playerWin(playerPoints)
                console.log(resultMessage.win(playerSelection, computerSelection));
            } else if (computerSelection === "rock") {
                console.log(resultMessage.draw(playerSelection));
            } else {
                computerPoints = computerWin(computerPoints)
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
                computerPoints = computerWin(computerPoints)
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
                computerPoints = computerWin(computerPoints)
                console.log(resultMessage.lose(playerSelection, computerSelection));
            }
            break;
    }
}

/* function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    const playerSelection = getComputerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection, playerPoints, computerPoints);
    playerPoints = result.playerPoints;
    computerPoints = result.computerPoints;
    
    //////////////////// create function inside resultMessage object to handle this
    console.log(`Out of 5 rounds, you got ${playerPoints} points!`)

    if (playerPoints > computerPoints) {
        console.log('You win!')
    } else if (playerPoints === computerPoints) {
        console.log('It is a tie!')
    } else {
        console.log('You lose.')
    }
    /////////////////////
} */