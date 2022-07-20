const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
// mock db of users
let users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "john@dvds.com", password: "john123" },
];
// Login endpoint
app.post("/login", (req, res) => {
  // view the req.body object (our incoming data)
  console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      return res.redirect(
        "http://127.0.0.1:5500/alyssa-everything/week-9/2-tuesday/frontend/loggedin.html"
      ); // the return means we will exit the app.post callback function immediately
    }
  }
  res.status(404).send("email or password is incorrect");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000/ 😎");
});
