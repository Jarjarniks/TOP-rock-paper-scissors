class revealText {
    constructor() {
    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavorText
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }

    createSpans(arrayOfLetters) {
        arrayOfLetters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            return span
        })
    }

    appendSpans(elementToAppendTo, fn) {
        
    }
};

export default revealText