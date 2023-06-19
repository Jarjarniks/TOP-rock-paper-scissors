class resultMsg {
    constructor() {
        
    }

    win(playerSelection, computerSelection) {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
    
    draw(playerSelection) {
        return `Both participants used ${playerSelection} - this round is a draw`
    }

    lose(playerSelection, computerSelection) {
        return `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
}

