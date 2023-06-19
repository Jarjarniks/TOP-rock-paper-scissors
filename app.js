const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();

console.log(getComputerChoice());