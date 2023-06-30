class revealText {
    constructor() {

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