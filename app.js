const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const number = Math.floor(Math.random() * choices.length);
    return choices[number]
}

console.log(getComputerChoice());