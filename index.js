let HomeScoreEl = document.getElementById("Home-Score")
let HomeAddOneEl = document.getElementById("Home-AddOne")

let GuestScoreEl = document.getElementById("Guest-Score")


function HomeAddOne(){ 
    HomeAddOneEl = 1
    HomeScoreEl.innerText = 0
    HomeScoreEl.innerText += HomeAddOneEl
}