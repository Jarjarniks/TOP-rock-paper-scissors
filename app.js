const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`Both of participants used ${playerSelection} - this round is a draw`)
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();

console.log(getComputerChoice());

playRound(playerSelection, computerSelection);