let HomeScoreEl = document.getElementById("Home-Score")
let HomeAddOneEl = document.getElementById("Home-AddOne")

let GuestScoreEl = document.getElementById("Guest-Score")

HomeAddOne = 1
HomeScoreEl.textContent = 0
function HomeAddOne(){ 
    HomeScoreEl.textContent += HomeAddOne
}