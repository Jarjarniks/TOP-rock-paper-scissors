class resultMsg {
    constructor(playerSelection, computerSelection) {
        this.playerSelection = playerSelection
        this.computerSelection = computerSelection
    }

    win() {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
    
    draw() {
        return `Both participants used ${playerSelection} - this round is a draw`
    }

    lose() {
        return `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
}

