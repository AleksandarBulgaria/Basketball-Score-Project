let HomeScoreEl = document.getElementById("Home-Score")
//let HomeAddOneEl = document.getElementById("Home-AddOne")
let GuestScoreEl = document.getElementById("Guest-Score")

let HomeCount = 0
let GuestCount = 0
let AddOne = 1
let AddTwo = 2
let AddThree = 3

function HomeAddOne(){ 
    HomeCount += AddOne
    HomeScoreEl.textContent = HomeCount
}
function HomeAddTwo(){ 
    HomeCount += AddTwo
    HomeScoreEl.textContent = HomeCount
}
function HomeAddThree(){ 
    HomeCount += AddThree
    HomeScoreEl.textContent = HomeCount
}

function GuestAddOne(){ 
    GuestCount += AddOne
    GuestScoreEl.textContent = GuestCount
}
function GuestAddTwo(){ 
    GuestCount += AddTwo
    GuestScoreEl.textContent = GuestCount
}
function GuestAddThree(){ 
    GuestCount += AddThree
    GuestScoreEl.textContent = GuestCount
}