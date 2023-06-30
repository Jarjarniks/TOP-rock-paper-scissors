import resultMsg from './resultMessage.js';
import game from './game.js';
import revealText from './revealText.js';

const choices = ["Rock", "Paper", "Scissor"];

const context = {
    rockBtn: document.querySelector('#rock'),
    paperBtn: document.querySelector('#paper'),
    scissorBtn: document.querySelector('#scissor'),
    roundResultDiv: document.querySelector('#roundResult'),
    currentScoreDiv: document.querySelector('#currentScore'),
    endResultDiv: document.querySelector('#endResult')
}


const flavorText1 = document.querySelector('#flavorText-1')
const flavorText2 = document.querySelector('#flavorText-2')
const flavorText3 = document.querySelector('#flavorText-3')


context.rockBtn.addEventListener('click', playRound);
context.paperBtn.addEventListener('click', playRound);
context.scissorBtn.addEventListener('click', playRound);

const resultMessenger = new resultMsg(context);
const GAME = new game('RPS', resultMessenger, context);
const revealTxt = new revealText()

// ---------------------------GAME----------------------------

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
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else if (computerSelection === "rock") {
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else {
                computerPoints = computerWin(computerPoints);
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerPoints = playerWin(playerPoints)
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else if (computerSelection === "paper") {
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else {
                computerPoints = computerWin(computerPoints)
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            }
            break;

        case "scissor":
            if (computerSelection === "paper") {
                playerPoints = playerWin(playerPoints)
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else if (computerSelection === "scissor") {
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            } else {
                computerPoints = computerWin(computerPoints)
                resultMessenger.roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints);
            }
            break;
    }

    GAME.updatePoints({playerPoints, computerPoints});
    resultMessenger.updateCurrentScore(GAME);

    if (GAME.playerPoints === 5 || GAME.computerPoints === 5) {
        GAME.disableButtons(context.rockBtn, context.paperBtn, context.scissorBtn)

        GAME.endGame(resultMessenger);
    }
    console.log(GAME)
}

// ---------------------------APP----------------------------

const flavor1ArrayTxt = revealTxt.createArrayOfLetters(flavorText1)
setTimeout(() => {
    revealTxt.appendElements(flavor1ArrayTxt, flavorText1, revealTxt.createSpans, 80)
}, 3000)

console.log(GAME)
console.log(resultMessenger)
GAME.startGame();
