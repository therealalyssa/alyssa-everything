// Extra Array Stuff

const randomArray = [
  1,
  5,
  true,
  false,
  "Hello",
  { name: "john", age: 55, favouriteColour: ["blue", "green"] },
  { name: "sally", age: 22, favouriteColour: ["purple", "red"] },
];

const usersName = prompt("Enter your name").toLowerCase();
console.log(usersName);

// for... of loop (to loop through an array) whereas for... in loop is for looping through and object
randomArray[5];
for (let element of randomArray) {
  //   console.log(element);
  if (usersName == element.name) {
    console.log(...element.favouriteColour);
  }
}
