class game {
    constructor(gameType) {
        this.gameType = gameType
        this.playerPoints;
        this.computerPoints;
    }

    startGame() {
        this.playerPoints = 0;
        this.computerPoints = 0;
    }

    updatePoints(resultObj) {
        this.playerPoints += resultObj.playerPoints;
        this.computerPoints += resultObj.computerPoints;
    }

    endGame() {


        /* //////////////////// create function inside resultMessage object to handle this
        console.log(`Out of 5 rounds, you got ${playerPoints} points!`)
    
        if (playerPoints > computerPoints) {
            console.log('You win!')
        } else if (playerPoints === computerPoints) {
            console.log('It is a tie!')
        } else {
            console.log('You lose.')
        }
        ///////////////////// */
    }
}

export default game