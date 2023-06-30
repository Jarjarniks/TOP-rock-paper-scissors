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

    appendElements(arrayTxt, elementToAppendTo, fn) {
        const elementsArr = fn(arrayTxt)
        elementsArr.forEach(element => {
            elementToAppendTo.appendChild(element)
        })
    }
};

export default revealText