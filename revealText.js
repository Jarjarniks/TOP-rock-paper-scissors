class revealText {
    constructor() {
    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavorText
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }

    createSpans(arrayOfLetters) {
        const spans = arrayOfLetters.map(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            return span
        })
        return spans   
    }

    appendSpans(arrayTxt, elementToAppendTo, fn) {
        arrayTxt.forEach(() => {
            elementToAppendTo.appendChild(fn)
        })
    }
};

export default revealText