class resultMsg {
    constructor(roundResultDiv, currentScoreDiv, endResultDiv) {
        this.roundResultDiv = roundResultDiv;
        this.currentScoreDiv = currentScoreDiv;
        this.endResultDiv = endResultDiv;
    }

    roundWinMsg(playerSelection, computerSelection) {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`
    }
    
    roundTieMsg(playerSelection) {
        return `Both participants used ${playerSelection} - this round is a draw`
    }

    roundLoseMsg(playerSelection, computerSelection) {
        return `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`
    }

    updateRoundResult() {
        this.roundResultDiv.textContent = 
    }
}

export default resultMsg