class revealText {
    constructor(textElementsToReveal) {
        this.textElementsToReveal = textElementsToReveal
    }
    
    createSpans(arrayOfLetters) {

    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavor-text
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }
};

export default revealText