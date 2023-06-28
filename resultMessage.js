class resultMsg {
    constructor(context) {
        this.context = context;
    }

    roundResultMsg(playerSelection, computerSelection, playerPoints, computerPoints) {
        let message;

        if (playerPoints > computerPoints) {
            message = `Player wins! player chose ${playerSelection}, computer chose ${computerSelection}`
        } else if (playerPoints === computerPoints) {
            message = `It's a tie! player chose ${playerSelection}, computer chose ${computerSelection}`
        } else {
            message = `Player loses! player chose ${playerSelection}, computer chose ${computerSelection}`
        }
        this.roundResultDiv.textContent = message
    }

    updateCurrentScore(GAME) {
        this.currentScoreDiv.textContent = `The score is:
        Player points: ${GAME.playerPoints}. Computer points: ${GAME.computerPoints}`;
    }

    endResultMsg(GAME, message) {
        this.currentScoreDiv.textContent = "";
        this.endResultDiv.textContent = message
    }

    startGameReset() {
        this.roundResultDiv.textContent = ""
        this.endResultDiv.textContent = ""
    }
}

export default resultMsg