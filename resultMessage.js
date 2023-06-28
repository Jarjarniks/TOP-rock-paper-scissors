class resultMsg {
    constructor(roundResultDiv, currentScoreDiv, endResultDiv) {
        this.roundResultDiv = roundResultDiv;
        this.currentScoreDiv = currentScoreDiv;
        this.endResultDiv = endResultDiv;
    }

    roundWinMsg(playerSelection, computerSelection) {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
    
    roundTieMsg(playerSelection) {
        return `Both participants used ${playerSelection} - this round is a draw`;
    }

    roundLoseMsg(playerSelection, computerSelection) {
        return `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`;
    }

    updateRoundResult(msg) {
        this.roundResultDiv.textContent = msg;
    }

    updateCurrentScore(GAME) {
        this.currentScoreDiv.textContent = `The score is:
        Player points: ${GAME.playerPoints}. Computer points: ${GAME.computerPoints}`;
    }

    endResultMsg(GAME, message) {
        this.roundResultDiv.textContent = ""
        this.currentScoreDiv.textContent = "";
        this.endResultDiv.textContent = message
    }
}

export default resultMsg