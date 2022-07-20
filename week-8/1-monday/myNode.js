const myModules = require("./myModules");
const exercise3 = require("./exercise3");

// console.log(greet);

// Exercise 1
// const greet = function (name) {
//   return `Hello ${name}! Welcome to Node`;
// };
// const greet = (name) => `Hello ${name}! Welcome to Node`; -->Arrow Function
//

//Exercise 2

function wordToTest(string) {
  const splitString = string.split("");
  console.log(splitString);
  const result = splitString.some(function (letter, index) {
    return letter === string[index + 1];
  });
  return result;
}

console.log(wordToTest("name"));
console.log(myModules);

console.log(myModules.addNums(5, 7));
console.log(myModules.subtractNums(10, 4));
console.log(myModules.isNumber("hello"));

console.log(exercise3.removeVowels("hello"));

module.exports = { wordToTest };
