"use strict";

//how to access json file
// fetch("json.json")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// gets data from local json file
function fetchData() {
  fetch("json.json")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

// Example 1- json
//gets data from local json file and appends it to the DOM
function fetchDataAndDisplay() {
  console.log("fetchDataAndDisplay button clicked");
  fetch("json.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      fetchedDataDivElement.innerHTML = ""; // clear any data in the element
      json.forEach(
        (person) =>
          (fetchedDataDivElement.innerHTML += `<li>${person.name}</li>`)
      ); // using forEach by looping through an array of objects to give us a list of the names
    });
}

// Example 2- api
// gets data from some api
function fetchExternalAPIData() {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      fetchedDataDivElement.innerHTML = "";
      jsonData.data.forEach(
        (user) =>
          (fetchedDataDivElement.innerHTML += `
        <img src=${user.avatar} /> <div>${user.first_name} ${user.last_name}</div> `)
      );
    });
}

// Exercise 1
function fetchPokemonAPIData() {
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto?limit=7.5&offset=7.5")
  fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=150")
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      fetchedDataDivElement.innerHTML = "";
      jsonData.results.forEach(
        (user) =>
          (fetchedDataDivElement.innerHTML += `
           <div>Name:${user.name} <br> URL:${user.url}</div> `)
      );
    });
}
