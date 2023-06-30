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
            console.log(span)
            return span
        })
        console.log(spans)
        return spans   
    }

    appendSpans(arrayTxt, elementToAppendTo, fn) {
        
    }
};

export default revealText