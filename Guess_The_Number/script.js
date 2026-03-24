let randomNumber = parseInt((Math.random())*100 + 1)

const submit = document.querySelector("#subt")
const UserInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")
let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(UserInput.value)
        validGuess(guess);
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert(`please enter valid number`)
    } 
    else if(guess<1){
        alert(`Please enter number greater than 1`)
    }
    else if(guess>100){
        alert(`Please enter number laser than 100`)
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            dispplayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        dispplayMessage(`You guesses it right`)
        endGame()
    }
    else if(guess<randomNumber){
        dispplayMessage(`Number is low`)
    }
    else if(guess>randomNumber){
        dispplayMessage(`Number is high`)
    }
}

function displayGuess(guess){
    UserInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
    
}

function dispplayMessage(message){
    lowHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    UserInput.value = ''
    UserInput.setAttribute("disabled", '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
   const newGmaeButton =  document.querySelector("#newGame")
   newGmaeButton.addEventListener("click", function(e){
    randomNumber = parseInt((Math.random())*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`
    UserInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
}