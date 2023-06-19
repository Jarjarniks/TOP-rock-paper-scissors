class resultMsg {
    constructor(playerSelection, computerSelection) {
        this.playerSelection = playerSelection
        this.computerSelection = computerSelection
    }

    win() {
        return `Player wins! player chose ${this.playerSelection}, computer chose ${this.computerSelection}`
    }
    
    draw() {
        return `Both participants used ${this.playerSelection} - this round is a draw`
    }

    lose() {
        return `Player loses! player chose ${this.playerSelection}, computer chose ${this.computerSelection}`
    }
}

