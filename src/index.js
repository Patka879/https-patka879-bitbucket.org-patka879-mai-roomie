'use strict'

let currentTab = "chores";

function loadChoresSection(container) {

    function createChoresSpanButton(name) {
        let button = document.createElement('button')
        button.innerText = name
        button.classList.add("in-chores-button")
        return button
    
    }

    container.appendChild(choresSpan)
    choresSpan.appendChild(createChoresSpanButton('Cleaning')) 
    choresSpan.appendChild(createChoresSpanButton('Taking out the trash'))
    choresSpan.appendChild(createChoresSpanButton('Cooking'))
    choresSpan.appendChild(createChoresSpanButton('Feeding the Cat'))
    choresSpan.appendChild(createChoresSpanButton('Add chore'))
    
}

function loadFinancesSection(container) {
    financesSpan.innerText = 'Finances'

    container.appendChild(financesSpan)
}

loadChoresSection()


function loadSection(name) {
    let appContainer = document.querySelector(".app-container")
    let oldAppContainerSpan = document.querySelector(".app-container span")

    if (oldAppContainerSpan) {
        appContainer.removeChild(oldAppContainerSpan)
    }

    let appContainerSpan = document.createElement('span')

    switch(name) {
        case "chores":
            loadChoresSection(appContainerSpan)
    }
}