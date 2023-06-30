class revealText {
    constructor() {
    }
    
    createSpans(arrayOfLetters) {
        let parentElement = document.createElement('div')
        arrayOfLetters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            console.log(span)
            parentElement.appendChild(span)
        })
        return parentElement
    }
    
    createArrayOfLetters(HTMLElement) {
        const flavorText = HTMLElement.dataset.flavorText
        const arrayOfLetters = flavorText.split('')
        return arrayOfLetters
    }

    appendSpans() {
        
    }
};

export default revealText