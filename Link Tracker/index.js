// Variable initialisiation 
const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const inputEl =  document.querySelector("#input-el")
const ulEl =  document.querySelector("#ul-el")
const linksFromLocalStorage = JSON.parse(localStorage.getItem("links"))
let links = []

// Storing links in local storage
console.log("linksFromLocalStorage", linksFromLocalStorage)
if(linksFromLocalStorage){
    links = linksFromLocalStorage
    render(links)
}

// Saving the link
inputBtn.addEventListener("click", function(){
    if(inputEl){
        links.push(inputEl.value)
        inputEl.value = ""

        localStorage.setItem("links", JSON.stringify(links))

        console.log(localStorage.getItem("links"))
    }
    render(links)
})

// Rendering the link to the user
function render(links){
    let listItems = ""
    for (let index = 0; index < links.length; index++) {
        listItems += `<li>
                        <a target="_blank" href= "${links[index]}"> 
                            ${links[index]}
                        </a>
                      </li>`
    }
    ulEl.innerHTML = listItems
}

// Delete all links
deleteBtn.addEventListener('dblclick', function(){ 
    localStorage.clear()
    links = []
    render(links)
})

// Save tab feature
tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        links.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(links))
        render(links)
    })
})