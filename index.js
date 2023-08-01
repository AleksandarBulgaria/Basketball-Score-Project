let HomeScoreEl = document.getElementById("Home-Score")
let HomeAddOneEl = document.getElementById("Home-AddOne")

let GuestScoreEl = document.getElementById("Guest-Score")

HomeAddOne = 1
function HomeAddOne(){ 
    HomeScoreEl.textContent = 0
    HomeScoreEl.textContent += HomeAddOne
}