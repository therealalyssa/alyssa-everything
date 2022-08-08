const person4 = {
  firstName: "Laurie",
  lastName: "Petrie",
  hello: greet,
};

function greet() {
  console.log(this);
  console.log("Hello" + this.firstName + this.lastName);
}

firstName = "Jane";
lastName = "Higgle";

person4.hello();
window.greet();

array123 = [1, 2]; //array literal

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const richie = new Person("Richie Petrie", 23);
console.log(richie);

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  displayName() {
    return this.firstName;
  }
}

const user1 = new User("Buddy", "Sorrell");
console.log(user1);

const user2 = new User("Sally", "Rogers");
console.log(user2);

console.log(user2.displayName());

class Person1 {
  constructor(age, cool) {
    this.age = age;
    this.isCool = cool;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const rob = new Person1("Rob", true);
const sal = { name: "sal", music: "indie" };
console.log(sal);
console.log(rob);

// Exercise 1

class Vehicle {
  constructor(model, manufacture, YOM, Colour) {
    this.model = model;
    this.manufacture = manufacture;
    this.YOM = YOM;
    this.Colour = Colour;
  }
  thisColour() {
    console.log(`Hello, the colour of this vehicle is ${this.Colour}`);
  }
}

const mercedes = new Vehicle("C Class", "Mercedes Benz", 2021, "Silver");
console.log(mercedes);
mercedes.thisColour();

const honda = new Vehicle("Civic", "Honda", 20021, "Blue");
console.log(honda);
honda.thisColour();
