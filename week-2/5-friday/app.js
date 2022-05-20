// Loops

const myAnswer = prompt("Enter in your number");

if (myAnswer == 23) {
  console.log("It was 23");
}

// For Loop
// for (initialCount; condition; updateExpression){
//     code to execute
// }

// Exercise 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2

for (let i2 = 10; i2 >= 1; i2--) {
  console.log(i2);
}

// Exercise 3

// Option 1

let myString = "Resposiveness";

for (let i = 0; i <= 9; i++) {
  console.log(myString.charAt(i));
}

// Option 2

// let word = "Resposiveness";

// for (let i = 0; i < 10; i++) {
//   console.log(word[i]);
// }

// Option 3

const myString1 = "Responsivenessness";

for (let i = 0; myString1.length < 10; i++) {
  console.log(myString1[i]);
}

// While Loop

let olive = 0;
while (olive < 10) {
  console.log("Adding an olive to the pizza.");
  olive++;
}
console.log("10 olives added to the pizza.");

// Exercise 4

// Option 1

let olive2 = 20;

while (olive2 >= 10) {
  console.log("Adding an ", olive2, " to the pizza.");
  olive2--;
}

for (let i2 = 10; i2 >= 1; i2--) {
  console.log(i2);
}

// Option 2

let numberOfPizzas = 20;
while (numberOfPizzas >= 10) {
  console.log(numberofPizzas);
  numberOfPizzas--;
}

// Dice display

// let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);

// while (dice !== 3) {
//   console.log(`It's a ${dice}`);
//   dice = Math.trunc(Math.random);
// }

// Exercise 5

const myNewString = "Hell@ the#e";
for (let i = 0; i < myNewString.length; i++) {
  if (myNewString[i] === "@" || myNewString[i] === "#") {
    console.log("error!There is a symbol in there!FOund a ", myNewString[i]);
    break;
  }
}

// Exercise 6

for (let pizza = 0; pizza < 10; pizza++) {
  console.log(`Number of pizza mase: $(pizza)`);
}
