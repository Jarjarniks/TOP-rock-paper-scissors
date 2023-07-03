class game {
    constructor(gameType, resultMessenger, context) {
        this.gameType = gameType;
        this.playerPoints = 0;
        this.computerPoints = 0;
        this.roundsPlayed = 0;
        this.startGameBtn;
        this.resultMessenger = resultMessenger;
        this.context = context;
    }

    startGame() {
        this.playerPoints = 0;
        this.computerPoints = 0;
        this.roundsPlayed = 0;

        if (this.startGameBtn) {
            const gameFeedback = document.querySelector('#game-feedback');
            gameFeedback.removeChild(this.startGameBtn);
        }

        this.resultMessenger.startGameReset();
        this.context.rockBtn.disabled = false;
        this.context.rockBtn.removeAttribute("class");
        this.context.paperBtn.disabled = false;
        this.context.paperBtn.removeAttribute("class");
        this.context.scissorBtn.disabled = false;
        this.context.scissorBtn.removeAttribute("class");
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

    createResetGameBtn() {
        const btn = document.createElement('button');
        btn.textContent = 'Play Again';
        btn.id = 'start-game';
        btn.addEventListener('click', this.startGame.bind(this));
        
        const gameFeedback = document.querySelector('#game-feedback');
        gameFeedback.appendChild(btn);

        this.startGameBtn = btn;
    }

    endGame() {
        this.resultMessenger.endResultMsg(this.playerPoints, this.computerPoints);
        this.createResetGameBtn();
    }
}

export default game