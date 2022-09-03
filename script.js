let count = 0
let gcount = 0
let countEl = document.getElementById("count-el")
let gcountEl = document.getElementById("gcount-el")

// SCORE BUTTONS \\

function plusone() {
    count += 1
    countEl.textContent = count
}

function plustwo() {
    count += 2
    countEl.textContent = count
}

function plusthree() {
    count += 3
    countEl.textContent = count
}

function gplusone() {
    gcount += 1
    gcountEl.textContent = gcount
}

function gplustwo() {
    gcount += 2
    gcountEl.textContent = gcount
}
 
function gplusthree() {
    gcount += 3
    gcountEl.textContent = gcount
}

function newGame(){
gcountEl.textContent = 0
 countEl.textContent = 0
count === 0
gCount === 0
}