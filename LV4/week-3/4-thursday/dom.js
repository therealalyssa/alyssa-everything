// we use variable1.name in objects to access properties too

// Colour Change Example

let currentColour = 0;
function changeColour() {
  const colourArray = ["purple", "blue", "red", "green", "yellow", "orange"];
  if (currentColour === colourArray.length) {
    currentColour = 0;
  } else {
    currentColour++;
  }
  document.body.style.background = colourArray[currentColour];
}

// getElementById

const helloWorldHead = document.getElementById("helloWorldHeader");
helloWorldHead.style.fontSize = "12px";
helloWorldHead.textContent = "Look! My text content has changed.";

// querySelector

const helloWorldHead = document.querySelector("#helloWorldHeader");
helloWorldHead.style.fontSize = "10px";
helloWorldHead.textContent = "Look! My text content has changed.";

// textContent vs innherHTML

// helloWorldHead.textContent = "Look! My text has changed";
// document.getElementById("helloWorldHeader").innerHTML = "HERE NOW";

// Exercise 1

const counterValue = document.getElementById("counter");
let initial = 0;
function incrementByOne() {
  initial++;
  counterValue.textContent = initial;
}

// Event Listener
const myDIv = document.getElementById("myID");
myDIv.addEventListener("mouseover", function () {
  myDIv.style.background = "blue";
});

function changeToWhite(event) {
  event.target.style.background = "white";
  console.loh(event);
}

// Mouseout demo just for fun
myDIv.addEventListener("mouseout", changeToWhite);

// Getting text from input fields

// const inputElement = document.querySelector("input");
// inputElement.addEventListener("input", logValue);
// function logValue(e) {
//   console.log(e.target.value);
// }

//--  Exercise 2
// const inputElement = document.querySelector("input");
// const characterCount = document.querySelector("#characterCount");
// inputElement.addEventListener("input", logValue);
// function logValue(e) {
//   console.log(e.target.value.length);
//   characterCount.textContent = e.target.value.length;
// }

const inputElement = document.querySelector("input");
const characterCount = document.querySelector("#character-count");
inputElement.addEventListener("input", logValue);
function logValue(e) {
  console.log(e.target.value.length);
  characterCount.textContent = e.target.value.length;
}
