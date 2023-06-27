class game {
    constructor(gameType) {
        this.gameType = gameType
        this.playerPoints = 0;
        this.computerPoints = 0;
    }

    startGame() {
        let playerPoints = 0;
        let computerPoints = 0;
    
    
    
        playerPoints = result.playerPoints;
        computerPoints = result.computerPoints;
        
        //////////////////// create function inside resultMessage object to handle this
        console.log(`Out of 5 rounds, you got ${playerPoints} points!`)
    
        if (playerPoints > computerPoints) {
            console.log('You win!')
        } else if (playerPoints === computerPoints) {
            console.log('It is a tie!')
        } else {
            console.log('You lose.')
        }
        /////////////////////
    }
}

export default game