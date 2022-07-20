// import { useState } from "react";
// import Car from "./Car";
// import Person from "./Person";
import Counter from "./counter";

//Map function
const numbers = [1, 4, 9];
const root = numbers.map((num, index) => num + 1); //callback function (value, index)- has an index parameter
console.log(root);

//Your turn 3- Using Map Function again

const fruits2 = ["apple", "mango", "orange"];
fruits2.map((fruits2, index) => {
  console.log(`${index + 1}, ${fruits2}`);
});

const fruits = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
];

const fruitsReturn = fruits.map((fruit, index) => {
  return `${index + 1}) ${fruit.units} units of ${fruit.name} costs ${(
    fruit.price * fruit.units
  ).toFixed(2)}`;
});
console.log(fruitsReturn);

//Rendering Map Elements on the page
const users = [
  { id: 1, name: "Sally Rogers" },
  { id: 2, name: "Buddy Sorrell" },
  { id: 3, name: "Jane Doe" },
];
//Object destructuring ES6

//normal way
const myObj1 = { id: 1, name: "Sally Rogers" };
const myId = myObj1.id;
console.log(myId);

//ES6 way
// const myObj2 = { id: 1, name: "Sally Rogers" };
// const myName = myObj2.name;
// const { name } = myObj2;
// console.log(myName, name);

// Exercise
const myObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};
const { name, email } = myObj;
console.log(name, email);

//Array destructuring
// const [first, second, third] = ["Laide", "Gabriel", "Jets"];
// let a, b;
// [a, , b] = ["Lordy", "Crown", "Roses"];
// console.log(a); //Output: Lordy
// console.log(b); //Output: Roses

function App() {
  // const [count, setCount] = useState(0);

  // function updateCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      {/* <Car carModel="Prius" carName="Toyota!!!"></Car>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
      <Person name="Alyssa" age="21"></Person> */}
      {/* <div>Count: {count}</div>
      <button onClick={updateCount}>Update Count</button> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
