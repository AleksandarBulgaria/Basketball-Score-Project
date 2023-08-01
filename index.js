let HomeScoreEl = document.getElementById("Home-Score")
let HomeAddOneEl = document.getElementById("Home-AddOne")

let GuestScoreEl = document.getElementById("Guest-Score")


function HomeAddOne(){ 
    HomeAddOneEl = 1
    HomeScoreEl.textContent = 0
    HomeScoreEl.textContent += HomeAddOneEl
}