const add = require("./index.js");
// const subtract = require("./index");

describe("Index page", () => {
  test("Add two numbers, it should return the sum", () => {
    expect(add(10, 5)).toBe(15);
  });
  //   test("Subtract two numbers, it should return the result", () => {
  //     expect(subtract(10, 5)).toBe(5);
  //   });
});
