let inGameWord, mistakes, corrects
document.querySelector('#startButton').addEventListener('click', () => {
    let enteredValue = document.querySelector('#wordInput').value 
    if(enteredValue.length != 0) {
        startGame(enteredValue)
    } else { alert('Kérlek írj be egy szót!') }
})

function startGame(word) {
    mistakes = 0
    corrects = 1
    inGameWord = word
    document.querySelector('#gameScreen').style.display = 'block'
    document.querySelector('#starterScreen').style.display = 'none'
    document.querySelector('#letters').innerHTML = ''
    for(let i = 0; i < word.length; i++) {
        let newLetterBlock = document.createElement('div')
        newLetterBlock.dataset.value = word[i]
        newLetterBlock.innerHTML = `<span class="hidden">${word[i]}</span>`
        newLetterBlock.className = 'letterblock'
        document.querySelector('#letters').append(newLetterBlock)
    }
}


function guessLetter(guessedLetter, button) {
    let successfulGuess = false
    for(let i = 0; i < inGameWord.length; i++) {
        if(inGameWord[i] == guessedLetter) {
            document.querySelectorAll(`[data-value="${guessedLetter}"]`).forEach((elem) => {
                elem.querySelector('span').style.opacity = 1;
            })
        successfulGuess = true 
        } 
    }
    if(successfulGuess) {
        button.style.backgroundColor = 'green'
        button.onclick = null 
        correct()
    } else {
        button.style.opacity = '0.5'
        button.onclick = null
        mistake() 
    }
}

function mistake() {
    mistakes++
    if(mistakes == 10) {
        document.querySelectorAll('.letterblock span').forEach((elem) => {
            elem.style.opacity = 1;
        })
        setTimeout(()=> {
            alert('Vesztettél! A szó "' + inGameWord + '" volt')
        }, 20)
        
    }
    document.querySelector('img').src = `imgs/${mistakes}.png`
}

function correct() {
    corrects++
    if(corrects == inGameWord.length) {
        alert('Nyertél!')
    }
}
