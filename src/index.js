'use strict'

let currentTab = "chores";

function loadChoresSection() {
    let appSection = document.querySelector("#app")
    let oldChoresSpan = document.querySelector("#app span")


    if (oldChoresSpan) {
        appSection.removeChild(oldChoresSpan)
    }

    let choresSpan = document.createElement('span')
    let buttonCleaning = document.createElement('button')
    buttonCleaning.innerText = "Cleaning"
    buttonCleaning.style.margin = "10px 0 5px 0"
    buttonCleaning.style.width = "250px"
    buttonCleaning.style.border = "1px solid black"
    buttonCleaning.style.borderRadius = "10px"
    buttonCleaning.style.height = "35px"
    let buttonTrash = document.createElement('button')
    buttonTrash.innerText = "Taking out the trash"
    buttonTrash.style.margin = "10px 0 5px 0"
    buttonTrash.style.width = "250px"
    buttonTrash.style.border = "1px solid black"
    buttonTrash.style.borderRadius = "10px"
    buttonTrash.style.height = "35px"
    let buttonCooking = document.createElement('button')
    buttonCooking.innerText = "Cooking"
    buttonCooking.style.width = "250px"
    buttonCooking.style.margin = "10px 0 5px 0"
    buttonCooking.style.border = "1px solid black"
    buttonCooking.style.borderRadius = "10px"
    buttonCooking.style.height = "35px"
    let buttonFeeding = document.createElement('button')
    buttonFeeding.innerText = "Feeding the Cat"
    buttonFeeding.style.margin = "10px 0 5px 0"
    buttonFeeding.style.width = "250px"
    buttonFeeding.style.border = "1px solid black"
    buttonFeeding.style.borderRadius = "10px"
    buttonFeeding.style.height = "35px"
    let buttonAddChore = document.createElement('button')
    buttonAddChore.innerText = "AddChore"
    buttonAddChore.style.margin = "10px 0 5px 0"
    buttonAddChore.style.width = "250px"
    buttonAddChore.style.border = "1px solid black"
    buttonAddChore.style.borderRadius = "10px"
    buttonAddChore.style.height = "35px"
    
    appSection.appendChild(choresSpan)
    choresSpan.appendChild(buttonCleaning) 
    choresSpan.appendChild(buttonTrash)
    choresSpan.appendChild(buttonCooking)
    choresSpan.appendChild(buttonFeeding)
    choresSpan.appendChild(buttonAddChore)
    
    choresSpan.style.display = "flex"
    choresSpan.style.flexDirection = "column-reverse"
    choresSpan.style.width = "300px"
    choresSpan.style.flexFlow = "column nowrap"
    choresSpan.style.width = "100%"
    choresSpan.style.alignItems = "center"
    choresSpan.style.marginTop = "20px"
    choresSpan.style.backgroundColor = "salmon"
   


}

function loadFinancesSection() {
    let appSection = document.querySelector("#app")
    let oldFinancesSpan = document.querySelector("#app span")
    if (oldFinancesSpan) {
        appSection.removeChild(oldFinancesSpan)
    }
    let financesSpan = document.createElement('span')
    financesSpan.innerText = 'Finances'
    appSection.appendChild(financesSpan)
}

loadChoresSection()
