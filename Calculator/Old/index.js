let input = "";
let inputs = [];
let operator = "";

function buttonDetector(id){
    if(id === "AC"){
        input = ""
        inputs = []
        document.querySelector("#display-el").textContent = input

    }else if(id === "+" ||id === "-" ||id === "*" || id === "/"){
        if (input != ""){
            inputs.push(input)
        }
        operator = id;
        input = "";
        console.log(inputs);
        // 
        document.querySelector("#display-el").textContent = input

    }else if (id === "="){
        inputs.push(input)
        let output = 0;
        // Execute code based on operator
        if(inputs.length>=2){

            if (operator === "+"){
                output = parseInt(inputs[0]) + parseInt(inputs[1])
            }else if (operator === "-"){
                output = parseInt(inputs[0]) - parseInt(inputs[1]);
            }else if(operator === "*"){
                output = parseInt(inputs[0]) * parseInt(inputs[1]);
            } else if(operator === "/"){
                output = parseInt(inputs[0]) / parseInt(inputs[1]);
            }
            console.log("output", output)

            document.querySelector("#display-el").textContent = output;

        }
    } else{
        input += id
        //
        document.querySelector("#display-el").textContent = input

    }
    console.log(id)
    // document.querySelector("#display-el").textContent = input
}

document.querySelector("#display-el").textContent = output