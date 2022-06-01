console.log("Hello World");

const iceCreams = ["vanilla", "chocolate", "blueberry"];

//twostring():
const toStringMethod = iceCreams.toString();
console.log(toStringMethod);

// split()⭐️⭐️⭐️
let a = "abc";
console.log(a.split(""));

// make it in reverse
let b = "abc";
console.log(b.split("").reverse().join(""));

// join() method ⭐️⭐️⭐️⭐️--> commonly used

let c = "abc";
const joinMethod = iceCreams.join("");
console.log(joinMethod);

// push()-->pushes elements to the end of the array⭐️⭐️⭐️⭐️⭐️

const pushMethod = iceCreams.push("rainbow");
console.log(pushMethod); // return the new length for the array
console.log(iceCreams); // return the new array

// pop() ⭐️⭐️⭐️
const popMethod = iceCreams.pop();
console.log(popMethod); //return the last item in an array

// unshift() ⭐️⭐️

const unShiftMethod = iceCreams.unshift("mango");
console.log(unShiftMethod); //gives you the new length of the array
console.log(iceCreams); //

// shift()

const shiftMethod = iceCreams.shift();
console.log(shiftMethod); //new item in 1st place
console.log(iceCreams);

// concat

//splice() ⭐️⭐️⭐️⭐️⭐️
// argument
// first one: The Index position you want to start change the array
// second one: How many element you want to delete
// third one: Elements you want to add

// 2
const months = ["Jan", "March", "June", "July"];
months.splice(2, 3);
console.log(months);

//3
const months2 = ["Jan", "March", "June", "July"];
months2.splice(2, 3, "Alyssa", "Soju");
console.log(months2);

// .slice() ⭐️⭐️⭐️⭐️⭐️
// argumnet:
// first: Index number you want to keep
// second:Index you want to start to remove

// 1
const animals = ["ant", "bison", "duck", "elephant"];
console.log(animals.slice(4));
console.log(animals.slice(-2)); //length-n (eg. 4-2=2)

// 2

const animals2 = ["ant", "bison", "duck", "elephant"];
console.log(animals2.slice(1, -2));

// reverse()

// sort() ⭐️⭐️⭐️⭐️⭐️
// default is to do alphabetical or numerical order

// Shortcut:
array1 = ["1000", "Konichiwa", "Kia Ora"];

array1.sort((a, b) => a - b); //from minimum value
array1.sort((a, b) => b - a); //from maximum value
console.log(array1);

array2 = ["Hello", "Konichiwa", "Kia Ora"];
array2.sort(function (a, b) {
  return b - a;
});

// forEach ⭐️⭐️⭐️⭐️⭐️

const array123 = [1, 2, 3];
const arrayElements = (element, index, array) => {
  console.log("element:" + element + "index:" + index + "array:" + array);
};
const arrayElements2 = (a, b, c) => {
  console.log("element:" + a + "index:" + b + "array:" + c);
};

array123.forEach(arrayElements);
array123.forEach(arrayElements2);

// map()⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ return an array

const mapArray = iceCreams.map(addStar);
function addStar(value) {
  return value + "*";
}
console.log(mapArray);

// Array.reduce()
// let numbers1 = [55, 4, 9, 15, 26];
// let results = numbers1.reduce(subtractAllNumbers);
// function subtractAllNumbers(total, value, index, array) {
//   return total - value;
// }
//results == (55-4-9-15-26) == 1

// Array.reduceRight()
// let numbers2 = [55, 4, 9, 15, 26];
// let sum = numbers2.reduceRight(subtactAllNumbers);
// function subtractAllNumbers(total, value, index, array) {
//   return total - value;
// }
//results == (26-15-9-4-55) == -57

// Practice Anagram Detection

// function isAnagram(test, original) {
//   if (test.length !== original.length) {
//     return false;
//   }

//   let s1 = test.toLowerCase().split("").sort().join("");
//   let s2 = original.toLowerCase().split("").sort().join("");

//   return s1 === s2;
// }
// isAnagram();
// console.log(isAnagram("toffee", "foefet"));

// New

// function isAnagram(test, original) {
// if (test.length ! = =   origin.length) {
//   return false
//   }
// let s1 = test.toLowerCase().split("").sort().join("")
// let s2 = original.toLowerCase().split("").sort().join("")
// return s1 === s2
// }

//   isAnagram()
//   console.log(isAnagram("PPlea", "apple"))
