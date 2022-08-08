//-- Data types--

// const phrase1 =
//   'The exact phrase she used was "There is no way we will get there in time."';

// const phrase2 = 'Remember to say "please" and "thank you".';

// console.log(phrase1, phrase2);

const stringOne = "\"It's six o'clock,\" she said.";
const stringTwo = 'Remember to say "please" and "thank you".';
console.log(stringOne, stringTwo);

// String Lengths

const myMessage = "Journey";
console.log(myMessage.length); // Output: 6

console.log(myMessage[myMessage.length - 1]); //Output: t
console.log(myMessage.at(-1));

// Your turn 3

const phraseOne = `"Concentrate all your thoughts \n`;
const phraseTwo = `upon the work in hand. The sun's rays do not burn\n`;
const phraseThree = `until brought to a focus."\n`;
const phraseFour = `--Alexander Graham Bell\n`;

totalLength =
  phraseOne.length + phraseTwo.length + phraseThree.length + phraseFour.length;

console.log(phraseOne + phraseTwo + phraseThree + phraseFour);
console.log(totalLength);

// Exercise 4

let userMessage = prompt("Please enter a sentence").trim();

if (userMessage.length <= 10) {
  alert(userMessage.toUpperCase());
} else if (userMessage.length > 10) {
  alert(userMessage.toLowerCase());
}

// Type Coercion

console.log(1 + parseInt("2"));
console.log(1 + Number("3"));
