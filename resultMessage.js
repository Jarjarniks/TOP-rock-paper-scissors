class resultMsg {
    constructor(roundResultDiv, currentScoreDiv, endResultDiv) {
        this.roundResultDiv = roundResultDiv;
        this.currentScoreDiv = currentScoreDiv;
        this.endResultDiv = endResultDiv;
    }

    roundResultMsg(playerSelection, computerSelection, message) {
        return `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`;
    }

    updateCurrentScore(GAME) {
        this.currentScoreDiv.textContent = `The score is:
        Player points: ${GAME.playerPoints}. Computer points: ${GAME.computerPoints}`;
    }

    endResultMsg(GAME, message) {
        this.currentScoreDiv.textContent = "";
        this.endResultDiv.textContent = message
    }
}

export default resultMsg