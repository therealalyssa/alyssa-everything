"use strict";
//.then method for async
// fetch("https://pokeapi.co/api/v2/pokemon")//asynchronous call that works by promises (fetch request)
//   .then((res) => res.json())
//   .then((res) => console.log(res)); //returns a promise itself that it says it will resolve
// console.log("HELLo");

//Await

async function asyncFunction() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchJson = await result.json();
  console.log(fetchJson);
}

asyncFunction();

// Using the try and catch block (catch is for if their is an error)

async function asyncFunction2() {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const fetchJson = await result.json();
    console.log(fetchJson);
  } catch (err) {
    console.log(err);
  }
}

asyncFunction2();

//---> Using try/catch blocks

// async function callFakeFetch() {
//   try {
// const myFetch = await fakeFetch('http://url.com')
//       console.log(myFetch)
//   } catch (err) {
//       console.log(err)
//   }
// }
// callFakeFetch()
