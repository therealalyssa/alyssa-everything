// Conditional Statements

// --Activity

const bookPrice = 5.0;
const bookSum = bookPrice * 10;
console.log(bookSum);

// --Exercise 1

console.log(1 == 1);
console.log(12 != 13);
console.log(43 !== "43");
console.log(15 > 9);
console.log(0 > 1);
console.log("120" == 121);
console.log("10" === "10");

// --if else statements

let y = 0;
if (y > 1) {
  console.log("y is greater than 1");
} else if (y === 1) {
  console.log("y is 1");
} else {
  console.log("y is less than 1");
}

// --Exercise 2

let x = 10;
if (x > 0) {
  console.log("x is positive");
} else if (x === 0) {
  console.log("x is 0");
} else {
  console.log("x is negative");
}

let myString = "1 apple";
console.log(myString[0]);

// --Excercise 3

let firstName = "alyssa";
console.log(firstName);

if (firstName[0] === "a") {
  console.log("true");
} else {
  console.log("false");
}

// Ternary Operator

const word = "hippopotamus";
word.length > 10
  ? console.log("The word is long")
  : console.log("The word is NOT long. It is short.");

//   Is the same as writing:

// Traditional 'if else' statement
if (word.length > 10) {
  console.log("The word is long");
} else {
  console.log("The word is NOT long. It is short.");
}

// --Ternary Exercise

// --Turn the traditional conditionals into ternary conditional:

const animalWordLength = "Hippopotamus";
if (animalWordLength[0] === "h") {
  console.log("The word is hippopotamus");
} else {
  console.log("The word is NOT hippopotamus.");
}

// -- Result
const animalWordLength1 = "Hippopotamus";
animalWordLength1[0] === "h"
  ? console.log("The word is hippopotamus")
  : console.log("The word is not hippopotamus");

// --Logical Operators

// --Tradional Conditionals
const word2 = "hello";
// first check if the word has more than 10 characters
if (word2.length > 10) {
  // now check if the word has less than 15 characters
  if (word2.length < 15) {
    console.log("The word is long");
  } else {
    console.log("The word is REALLY long");
  }
}

//-- Operators
// AMD =&&
// OR=||

// --Using AND operator
const word3 = "hello";
if (word3.length > 10 && word3.length < 15) {
  console.log("The word is long");
} else if (word3.length >= 15) {
  console.log("The word is REALLY long");
} else {
  console.log("The word is not long");
}

// --Using OR operator
const word4 = "";
if (word4.length === 0 || word4.length > 15) {
  console.log("The string is empty or is greater than 25 characters!");
}

// --Switches;

let fruit = "kiwifruit";
switch (fruit) {
  case "orange":
    console.log("this fruit is an orange");
    break;
  case "strawberry":
    console.log("this fruit is a strawberry");
    break;
  case "banana":
    console.log("this fruit is a banana");
    break;
  default:
    console.log("fruit not found");
}
