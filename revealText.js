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

    appendElements(arrayTxt, elementToAppendTo, fn, delay) {
        const elementsArr = fn(arrayTxt)
        elementsArr.forEach((element, index) => {
            setTimeout(() => {
                elementToAppendTo.appendChild(element)
            }, delay * (index + 1))
        })
    }
};

export default revealText