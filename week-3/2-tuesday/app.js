// Boolean

//  !=not
// !false=true
// !true=false

//  AND=&&
// Usually false (&&=false unless A&&B are both truth)

//   OR=||
// Usually true (||=true unless A || B are both false)

// --Objects--

// Exercise 2

const person = {
  firstName: "Alyssa",
  lastName: "Barrett",
  favouriteColour: "Lilac",
};

console.log(
  `This is` +
    ` ` +
    person.firstName +
    ` ` +
    person.lastName +
    ` ` +
    `, and her favourite colour is` +
    ` ` +
    person.favouriteColour
);

// Exercise 4

const rectangle = {
  length: 10,
  width: 50,
};

const area = rectangle["length"] * rectangle["width"];
console.log(area);

// Exercise 5

const newPerson = {
  firstName: "Alyssa",
  lastName: "Barrett",
  favouriteNumber: "24",
  favouriteDay: "Saturday",
};
console.log(newPerson);

newPerson.favouriteFood = "Sushi";

console.log(newPerson);

delete newPerson.favouriteDay;
newPerson.favouriteNumber = newPerson.favouriteNumber * 2;

console.log(newPerson);

const faveFood = ["sushi", "mango", "pasta", "korean fried chicken"];
console.log(faveFood);

// Exercise 8

const numbers = [5, 6, 7, 8, 9, 10];

const sum =
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(sum / numbers.length);
