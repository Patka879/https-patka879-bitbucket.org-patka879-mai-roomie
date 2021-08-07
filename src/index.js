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
    buttonCleaning.classList.add("in-chores-button")
    let buttonTrash = document.createElement('button')
    buttonTrash.innerText = "Taking out the trash"
    buttonTrash.classList.add("in-chores-button")
    let buttonCooking = document.createElement('button')
    buttonCooking.innerText = "Cooking"
    buttonCooking.classList.add("in-chores-button")
    let buttonFeeding = document.createElement('button')
    buttonFeeding.innerText = "Feeding the Cat"
    buttonFeeding.classList.add("in-chores-button")
    let buttonAddChore = document.createElement('button')
    buttonAddChore.innerText = "AddChore"
    buttonAddChore.classList.add("in-chores-button")
    
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
