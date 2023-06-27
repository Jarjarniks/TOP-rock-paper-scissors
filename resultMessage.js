class resultMsg {
    constructor() {
        
    }

    winMsg(playerSelection, computerSelection) {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
    
    drawMsg(playerSelection) {
        return `Both participants used ${playerSelection} - this round is a draw`
    }

    loseMsg(playerSelection, computerSelection) {
        return `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
}

export default resultMsg