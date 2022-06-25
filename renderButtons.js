const letters = [
    "A", 
    "Á", 
    "B", 
    "C",  
    "D", 
    "E", 
    "É", 
    "F", 
    "G",  
    "H", 
    "I", 
    "Í", 
    "J", 
    "K", 
    "L",  
    "M", 
    "N",  
    "O", 
    "Ó", 
    "Ö", 
    "Ő", 
    "P", 
    "Q", 
    "R", 
    "S",  
    "T", 
    "U", 
    "Ú", 
    "Ü", 
    "Ű", 
    "V", 
    "W",
    "X", 
    "Y", 
    "Z",
]


for(let i = 0; i < letters.length; i++) {
    let newLetterButton = document.createElement('button')
    newLetterButton.innerHTML = letters[i]
    newLetterButton.onclick = () => { guessLetter(letters[i].toLocaleLowerCase(), newLetterButton) }
    document.querySelector('#letterButtons').append(newLetterButton)
}