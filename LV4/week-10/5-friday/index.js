const express = require("express");
const mysql = require("mysql2");
// const { listenerCount } = require("mysql2/typings/mysql/lib/Connection");
require("dotenv").config();

const app = express();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

//Endpoint 1

app.get("/", (req, res) => {
  connection.query("SELECT * FROM country", (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

// Exercise 1
app.get("/city", (req, res) => {
  connection.query(
    "SELECT * FROM city WHERE Name LIKE 'A%'; ",
    (err, result) => {
      if (err) return console.log(err);
      res.send(result);
    }
  );
});

// Exercise 2
app.get("/country/:code2", (req, res) => {
  const countryCode = req.params.code2;
  console.log(countryCode);

  connection.query(
    `SELECT * FROM country WHERE Code2 = ?`,
    [countryCode],
    (err, result) => {
      if (err) return console.log(err);
      res.send(result);
    }
  );
});

//Exercise 4
const newCountry = {
  Code: "", // NZ"
  Name: "", // My New Country
  Continent: "", // ONLY 'Asia','Europe','North America','Africa','Oceania','Antarctica', OR 'South America'
  Region: "", // Australia and New Zealand
  IndepYear: 2, // 1922
  Population: 1, // 500000
  LifeExpectancy: 1, // 99
  LocalName: "", // Aussie
  HeadOfState: "", // Elizabeth
  Code2: "", // NZ
};

//Exercise 3

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Connected! Listening at http://localhost.${PORT}`);
  }
});
