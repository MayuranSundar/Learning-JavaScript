
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

function startGame(){
    // Resetings values when a new game starts
    isAlive = true;
    hasBlackjack = false;
    cards = []
    sum = 0;
    document.getElementById("newCard-btn").disabled = false;
    document.getElementById("newCard-btn").style.cursor = "pointer";
    document.getElementById("newCard-btn").style.color = "#016f32";

    // Creating two random cards
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    // Pushing the cards into the cards array
    cards.push(card1);
    cards.push(card2);

    // Loop to sum the cards
    for(let i = 0; i<cards.length; i++){
        sum+= cards[i]
    }
    renderGame();
}

function getRandomCard(){
    let card = Math.floor(Math.random() * 13) + 1;
    if(card === 1){
        // Show popup for user to choose 1 or 11
        // That value then will be the value below
        card = 11;
    }else if(card >10){
        card = 10;
    }
    return card
}

function renderGame(){
    if(sum === 21){
        message = "You've got BlackJack!";
        hasBlackjack = true;
    }else if(sum<=20){
        message = "Do you want to draw one more card?";
    }else{
        message = "You are out";
        isAlive = false; 
    }

    document.getElementById("message-el").textContent = message;
    document.getElementById("sum-el").textContent = "Sum: " + sum;
    document.getElementById("cards-el").textContent = "Cards: ";

    for(let i = 0; i<cards.length; i++){
        document.getElementById("cards-el").textContent += cards[i] + " ";
    }
}

function newCard(){
    console.log("Is Alive: ", isAlive, "Has Blackjack: ", hasBlackjack);
    if (isAlive === true && hasBlackjack === false){
        let card3 = getRandomCard();
        cards.push(card3);
        sum += card3;
        renderGame();
    }else{
        document.getElementById("newCard-btn").disabled = true;
        document.getElementById("newCard-btn").style.cursor = "not-allowed";
        document.getElementById("newCard-btn").style.color = "red";
    }
}
