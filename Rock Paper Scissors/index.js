// Const variables initialisation
const decision = document.querySelectorAll(".decision")
const userChoice = document.querySelector("#user-choice-el")
const matchResult = document.querySelector("#match-result-el")
const compChoice = document.querySelector("#comp-choice-el")
const userPoints = document.querySelector("#user-points-el")
const compPoints = document.querySelector("#comp-points-el")
const rpsValues = ["Rock", "Paper", "Scissors"]

// Additional variables intialisation
let userVal = ""
let randomVal = ""
let userPointsLocal = 0
let compPointsLocal = 0

userPoints.textContent = 0
compPoints.textContent = 0

// Checking which button has been pressed then getting a random choice to evaluate the result
decision.forEach(e =>{
    e.addEventListener("click", function(){
        userChoice.textContent = e.textContent
        userVal = e.textContent
        compVal = randomRPS()
        result(userVal, compVal)
    })
})

// Generates a random 0-2 which is used to get the value from the array
function randomRPS(){
    let i = Math.floor(Math.random()*3)
    compChoice.textContent = rpsValues[i] 
    randomVal = rpsValues[i] 
    return randomVal
}

// Calculates and displays the result  
function result(uV, rV){
    let txt = ""
    if(uV === rV){
        txt = `IT'S A TIE`
    }else if(uV === "Rock" && rV === "Scissors"){
        userPointsLocal++
        txt = `IT'S A WIN`
    }else if(uV === "Scissors" && rV === "Paper"){
        userPointsLocal++
        txt = `IT'S A WIN`
    }else if(uV === "Paper" && rV === "Rock"){
        userPointsLocal++
        txt = `IT'S A WIN`
    }else{
        compPointsLocal++
        txt = `IT'S A LOSS`
    }
    matchResult.textContent = txt
    userPoints.textContent = parseInt(userPointsLocal.textContent || 0) + userPointsLocal
    compPoints.textContent = parseInt(compPointsLocal.textContent || 0) + compPointsLocal
}

