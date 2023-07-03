class resultMsg {
    constructor(context) {
        this.context = context;
    }

    roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints) {
        let message;

        if (playerPoints > computerPoints) {
            message = `Player wins! player chose ${playerSelection}, the leprechaun chose ${computerSelection}.`
        } else if (playerPoints === computerPoints) {
            message = `It's a tie! player chose ${playerSelection}, the leprechaun chose ${computerSelection}.`
        } else {
            message = `Player loses! player chose ${playerSelection}, the leprechaun chose ${computerSelection}.`
        }
        this.context.roundResultDiv.textContent = message
    }

    updateCurrentScore(GAME) {
        this.context.currentScoreDiv.textContent = `The score is:
        Player points: ${GAME.playerPoints}. Leprechaun points: ${GAME.computerPoints}.`;
    }

    endResultMsg(playerPoints, computerPoints) {
        let message;
        if (playerPoints > computerPoints) {
            message = `You won! You got ${playerPoints} points. The leprechaun got ${computerPoints} points.`;
        } else if (playerPoints === computerPoints) {
            message = `It's a tie! You got ${playerPoints} points. The leprechaun got ${computerPoints} points. Time for a rematch?`;
        } else {
            message = `You lost! You got ${playerPoints} points. The leprechaun got ${computerPoints} points.`;
        }
        this.context.currentScoreDiv.textContent = "";
        this.context.endResultDiv.textContent = message;
    }

    startGameReset() {
        this.context.roundResultDiv.textContent = ""
        this.context.endResultDiv.textContent = ""
    }
}

export default resultMsg