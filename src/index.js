'use strict'

let currentTab = "chores";

function loadChoresSection() {
    let appSection = document.querySelector("#app")
    let oldChoresSpan = document.querySelector("#app span")
    if (oldChoresSpan) {
        appSection.removeChild(oldChoresSpan)
    }
    let choresSpan = document.createElement('span')
    choresSpan.innerText = 'Chores'
    appSection.appendChild(choresSpan)
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
