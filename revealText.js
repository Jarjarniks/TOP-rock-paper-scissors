class revealText {
    constructor() {
    }
    
    createSpans(arrayOfLetters) {
        arrayOfLetters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            console.log(span)
            return span
        })
    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavorText
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }

    appendSpans(elementToAppendTo, fn) {
        
    }
};

export default revealText