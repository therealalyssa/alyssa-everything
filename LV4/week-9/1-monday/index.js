const express = require("express");
const app = express();

//Endpoint 1
app.get("/", (reg, res) => {
  res.status(202).send("<b>Hello World! I love you!</b>");
  //res.sendStatus(202);
});

//Endpoint 2--object list
app.get("/api/user:List", (req, res) => {
  const userList = [
    { name: "john", age: 27 },
    { name: "Mary", age: 22 },
    { name: "Ethan", age: 17 },
    { name: "Joe", age: 53 },
    { name: "Amelia", age: 87 },
    { name: "Adam", age: 34 },
  ];
  res.json(userList);
});

//Endpoint 3 --greet
app.get("/api/greet", (req, res) => {
  res
    .status(201)
    .send("<b>Hello Cici, thank you for visiting this URL 🙌 </b>");
});

// //URL constructor
const urlVar = new URL(
  "https://www.trademe.co.nz/a/search?search_string=le%20snack"
);

console.log(urlVar.username);
// console.log(urlVar.search);
// console.log(urlVar.searchParams);
// console.log(urlVar.searchParams.get("search_string"));

//"www.trademe.co.nz/a/marketplace/computers/laptops/search?search_string=laptop&condition=new&shipping_method=pickup&price_min=30&price_max=20"

// Endpoint 4
// app.get("/api/user/:age", (req, res) => {
//   console.log("params: ", req.params.age);
//   userList.forEach((user) => {
//     if (user.age === req.params.age) {
//       res.send("Yes there is someone with that age");
//     } else {
//       res.send("No, there is not someone with that age");
//     }
//   });
// });

const userList = [
  { name: "john", favouriteColour: "red", id: 1 },
  { name: "Mary", favouriteColour: "blue", id: 2 },
  { name: "Ethan", favouriteColour: "pink", id: 3 },
  { name: "Joe", favouriteColour: "green", id: 4 },
  { name: "Amelia", favouriteColour: "green", id: 5 },
  { name: "Adam", favouriteColour: "red", id: 6 },
];
app.get("/api/user/:id", (req, res) => {
  console.log(`User Params: ${req.params.id}`);
  const requestedUser = userList.find((user) => user.id == req.params.id);
  if (requestedUser) {
    res.status(200).json({
      name: requestedUser.name,
      favouriteColour: requestedUser.favouriteColour,
    });
    return;
  }
  if (!requestedUser) {
    res.status(400).send("User does not exist");
    return;
  }
});

//Exercise 2
app.get("/books/:booksID", (req, res) => {
  console.log(req.sparams.booksID);
});

app.listen(4007);
