console.log("Script running...")
// Task 1: 
// Select the cshImage div
let cshImg = document.querySelector("#cshImage")

// Add an event listener such that when the div is clicked, you create a new p tag, set the text to "Our new building!" and append it to the div
let newP; 
cshImg.addEventListener("click", function() {
  newP = document.createElement("p") 
  newP.textContent = "Our new building!"
  cshImg.appendChild(newP)
})

// Task 2: 
// Set up the DOM manipulation flow such that when you click the cat button, the cat image is removed.
let catBtn = document.querySelector("#catButton")
let imgDiv = document.querySelector("#images")
let catImg = document.querySelector("#catImage")

catBtn.addEventListener("click", function() {
  imgDiv.removeChild(catImg)
})

// Set up the DOM manipulation flow such that when you click the dog button, the dog image is removed.
let dogBtn = document.querySelector("#dogButton")
let dogImg = document.querySelector("#dogImage")

dogBtn.addEventListener("click", function() {
  imgDiv.removeChild(dogImg)
})

// Task 3: Set up the DOM manipulation flow such that when the add button is clicked, you create a new li tag, set the text to the value of input, and append it to the ul element
let add = document.querySelector("#add")
let friendsList = document.querySelector("#friendsList")
let friendsInput = document.querySelector("#friends")

let newLi; 
add.addEventListener("click", function() {
  newLi = document.createElement("li")
  newLi.textContent = friendsInput.value

  friendsList.appendChild(newLi)
})
