'use strict'

let currentTab = 'chores';

console.log('case chores')
function loadChoresSection(container) {

    function createChoresSpanButton(name) {
        let button = document.createElement('button')
        button.innerText = name
        button.classList.add("in-chores-button")
        return button
    
    }
    
    container.appendChild(createChoresSpanButton('Cleaning')) 
    container.appendChild(createChoresSpanButton('Taking out the trash'))
    container.appendChild(createChoresSpanButton('Cooking'))
    container.appendChild(createChoresSpanButton('Feeding the Cat'))
    container.appendChild(createChoresSpanButton('Add chore'))
    
}

function loadFinancesSection(container) {

    console.log('case finances')
    container.innerText = 'Finances'
}

function loadSection(name) {
    let appContainer = document.querySelector(".app-container")
    appContainer.innerHTML = ''


    switch(name) {
        case 'chores':
            loadChoresSection(appContainer)
            return
        case 'finances':
            loadFinancesSection(appContainer)
            return
        default:
            loadChoresSection(appContainer)
            return
    }
}

window.onload = () => {
    loadSection('chores')
}