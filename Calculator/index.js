// Intialising variables
let equation = "" 
const acBtn = document.querySelector(".ac")
const numBtns = document.querySelectorAll(".num-button")
const eqBtn = document.querySelector(".equal")
const delBtn = document.querySelector(".del")

// All Clear (AC) button event listener
acBtn.addEventListener("click", function(){
    // Displaying 0 and clearing the equation
    document.querySelector("#result-box").textContent = 0
    equation = ""
})

// All number buttons and operator buttons event listener
numBtns.forEach(e => {
    e.addEventListener("click", function(){
        // Adding each input to the equation string and displayed 
        equation += e.textContent
        document.querySelector("#result-box").textContent = equation
    })
})

// Equal button's event listener
eqBtn.addEventListener("click", function(){
    // if equation is not empty, the equation is evaluated and displayed
    if(equation){
        let output = eval(equation)
        equation = output
        document.querySelector("#result-box").textContent = output
    }
})

// Delete button's event listener 
delBtn.addEventListener("click", function(){
    // if equation is not empty the last input is deleted and displayed
    if(equation){
        equation = equation.slice(0,-1)
        document.querySelector("#result-box").textContent = equation
    }
})