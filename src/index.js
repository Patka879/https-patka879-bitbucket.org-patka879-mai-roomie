'use strict'

let currentTab = "chores";

function loadChoresSection() {
    let appSection = document.querySelector("#app")
    let oldChoresSpan = document.querySelector("#app span")


    if (oldChoresSpan) {
        appSection.removeChild(oldChoresSpan)
    }

    function createChoresSpanButton(name) {
        let button = document.createElement('button')
        button.innerText = name
        button.classList.add("in-chores-button")
        return button
    }

    let choresSpan = document.createElement('span')
    choresSpan.classList.add("chores")
    
    appSection.appendChild(choresSpan)
    choresSpan.appendChild(createChoresSpanButton('Cleaning')) 
    choresSpan.appendChild(createChoresSpanButton('Taking out the trash'))
    choresSpan.appendChild(createChoresSpanButton('Cooking'))
    choresSpan.appendChild(createChoresSpanButton('Feeding the Cat'))
    choresSpan.appendChild(createChoresSpanButton('Add chore'))
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
