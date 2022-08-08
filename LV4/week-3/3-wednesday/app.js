// push method

const hats = ["trilby", "panama", "top hat", "bowler"];
hats.push("fedora"); // Adds fedora at the end of the array

const faveRecipe = {
  title: "Chicken Pesto Pasta",
  servings: 4,
  ingredients: ["Chicken", "Penne Pasta", "Pesto", "Basil", "Cheese"],
};

console.log(faveRecipe);
// console.log(faveRecipe,faveRecipe.ingredients.length);
console.log(`Number of ingredients: ${faveRecipe.ingredients.length}`);

faveRecipe.ingredients.push("Water");
console.log(faveRecipe);

// Date Object

const myDate = new Date(2000, 6, 24);
console.log(myDate);
console.log(myDate.getFullYear());

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
};

const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(
  myDate
);
console.log(myFormattedDate);

// Exercise 1

const myBirthDate = new Date(2000, 6, 24);
console.log(myBirthDate);

// Math Object

Math.PI; // returns pi
Math.max(5, 3.7); // 7
Math.floor(5.95);
Math.random(); //pseudo random number between 0-1

console.log(Math.min(5, 3, 7));
console.log(Math.max(5, 3, 7));
console.log(Math.pow(5, 3, 7));

//  functions

function myFirstFunction() {
  console.log("I just called my first function");
}

myFirstFunction();

function funcWithParams(num1, num2) {
  console.log(num1 + num2);
}

myFirstFunction(3, 4);

// Exercise 1

function myName(name1, name2) {
  console.log(name1, name2);
}

myName("Alyssa", "Barrett");

// Example of spread (...)

const myArray = [5, 2, 3, 5];

console.log(Math.min(...myArray));

// Another exercise

function myStrings(string1, string2) {
  console.log(`${string1} ${string2}`);
}

myStrings("Hello", "World");

// Return

function funcWithParams(num1, num2) {
  return num1 + num2;
}

console.log(funcWithParams(3, 4));

let funcAnswer7 = funcWithParams(3, 4);
if (funcAnswer7 === 7) {
  console.log("the answer is right");
}

// return acts as a break in code

// exercise 3

function myString1(string) {
  if (string) {
    return true;
  } else {
    return false;
  }
}
console.log(myString1("hi"));

// Exercise 3 explained-- parsing an object in the parameter

const person = {
  firstName: "Alyssa",
  favColour: "Blue",
};

function thefirstName(myObject) {
  return myObject.firstName;
}

console.log(thefirstName(person));

// Functions in Objects

const person1 = {
  firstName: "Alyssa",
  favColour: "Blue",
  greeting: function (name) {
    console.log(`Hi ${name}! 🥰 Weather is good.`);
  },
};

// format= objectName.methodName(argyment);
person1.greeting("Rob");

// Exercise 4.1

function halfNumber(number1) {
  const halvedNumber = number1 / 2;
  return halvedNumber;
}

let halfNumber23 = halfNumber(23);
console.log(halfNumber23);

// Exercise 4.2

function getTimeInSeconds(timeInMinutes) {
  const timeInSeconds = timeInMinutes * 60;
  return timeInSeconds;
}

const userInputMinutes = Number.parseInt(prompt("Enter in a number", "5"));
const timeInSeconds = getTimeInSeconds(userInputMinutes);
alert(`${userInputMinutes} minutes is ${timeInSeconds}`);
