import resultMsg from './resultMessage.js';
import game from './game.js';

const resultMessager = new resultMsg();
const GAME = new game('RPS');

const choices = ["Rock", "Paper", "Scissor"];

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

const roundResultDiv = document.querySelector('#roundResult');
const currentScoreDiv = document.querySelector('#currentScore');
const endResultDiv = document.querySelector('#endResult');

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
                playerPoints = playerWin(playerPoints);
                roundResultDiv.textContent = resultMessage.win(playerSelection, computerSelection);
            } else if (computerSelection === "rock") {
                roundResultDiv.textContent = resultMessage.draw(playerSelection, computerSelection);
            } else {
                computerPoints = computerWin(computerPoints);
                roundResultDiv.textContent = resultMessage.lose(playerSelection, computerSelection);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerPoints = playerWin(playerPoints)
                roundResultDiv.textContent = resultMessage.win(playerSelection, computerSelection);
            } else if (computerSelection === "paper") {
                roundResultDiv.textContent = resultMessage.draw(playerSelection, computerSelection);
            } else {
                computerPoints = computerWin(computerPoints)
                roundResultDiv.textContent = resultMessage.lose(playerSelection, computerSelection);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerPoints = playerWin(playerPoints)
                roundResultDiv.textContent = resultMessage.win(playerSelection, computerSelection);
            } else if (computerSelection === "scissor") {
                roundResultDiv.textContent = resultMessage.draw(playerSelection, computerSelection);
            } else {
                computerPoints = computerWin(computerPoints)
                roundResultDiv.textContent = resultMessage.lose(playerSelection, computerSelection);
            }
            break;
    }
    GAME.updatePoints({playerPoints, computerPoints});
    console.log(GAME)
}

GAME.startGame();
console.log(GAME)