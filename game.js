class game {
    constructor(gameType) {
        this.gameType = gameType
        this.playerPoints;
        this.computerPoints;
        this.roundsPlayed = 0;
    }

    startGame() {
        this.playerPoints = 0;
        this.computerPoints = 0;
    }

    updatePoints(resultObj) {
        this.roundsPlayed += 1;
        this.playerPoints += resultObj.playerPoints;
        this.computerPoints += resultObj.computerPoints;
    }

    disableButtons(...buttonElements) {
        buttonElements.forEach(button => {
            button.disabled = true;
        })
    }

    endGame(resultMessenger) {
        let message;
        if (this.playerPoints > this.computerPoints) {
            message = `You won! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points`;
            resultMessenger.endResultMsg(this, message)
        } else if (this.playerPoints === this.computerPoints) {
            message = `It's a tie! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points. Time for a rematch?`;
            resultMessenger.endResultMsg(this, message)
        } else {
            message = `You lost! You got ${this.playerPoints} points. The computer got ${this.computerPoints} points`;
            resultMessenger.endResultMsg(this, message)
        }
    }
}

export default game