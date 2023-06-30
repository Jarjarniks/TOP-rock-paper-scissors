class revealText {
    constructor() {
    }
    
    createSpans(arrayOfLetters) {

    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavorText
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }
};

export default revealText