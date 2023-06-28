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
        if (this.playerPoints > this.computerPoints) {
            resultMessenger.endResultWin(this)
        } else if (this.playerPoints === this.computerPoints) {
            resultMessenger.endResultTie(this)
        } else {
            resultMessenger.endResultLose(this)
        }
    }
}

export default game