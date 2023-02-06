// initalise count as 0
let count = 0;
// Listen to the clicks of increment button
function increment(){
    count ++;
    document.getElementById("count-el").textContent = count;
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let txt = count + " - "; 
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    document.getElementById("save-el").textContent += txt
    count = 0
    document.getElementById("count-el").textContent = count
}