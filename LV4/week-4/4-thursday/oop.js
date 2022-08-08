// Exercise 1

class Recipes {
  constructor(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
  }
  makeRecipes() {
    console.log("Your food is ready!");
  }
  showDetails() {
    console.log(`Title:${this.title}`);
    console.log(`Servings:${this.servings}`);
    console.log(`Ingredients:${this.ingredients}`);
  }
}

const birthdayCake = new Recipes("Birthday Cake", 4, [
  "Flour",
  "Eggs",
  "Sugar",
  "Chocolate",
  "Strawberries",
]);
console.log(birthdayCake);
birthdayCake.makeRecipes();
birthdayCake.showDetails();

const chickenPasta = new Recipes("Chicken Pasta", 8, [
  "Pasta",
  "Cheese Sauce",
  "Smoked Chicken",
  "Cherry Tomatoes",
  "Basil",
]);
console.log(chickenPasta);
chickenPasta.makeRecipes();
chickenPasta.showDetails();

// Getters

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "english",
  get lang() {
    return this.language.toUpperCase();
  },
};
console.log(person.lang);

// Setters

// normal
const language = {
  log: [],
  current(name) {
    this.log.push(name);
  },
};
console.log(language);
language.current("EN");
console.log(language);

//using setters
const language1 = {
  log: [],
  set current(name) {
    this.log.push(name);
  },
};
language1.current = "EN";
language1.current = "FA";
console.log(language1.log);

//getters/setters example inside a class (useful for data validation)

class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name}is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const Sally = new Student("Sally Roger", 1923);
Sally.fullName;
console.log(Sally.age);
console.log(Sally.fullName);

// Exercise 2

class CarSales {
  constructor(carList) {
    this.carList = carList; //   carList=[]-- another option if you're not parsing in any data
  }
  set car(carName) {
    this.carList.push(carName);
  }
  get car() {
    if (this.carList.length === 0) {
      return "sorry out of cars";
    }
    return this.carList;
  }
  rentACar() {
    this.carList.pop();
  }
  returnCar(carName) {
    this.carList.push(carName);
  }
}

const honda = new CarSales([]);
console.log(honda);
honda.car = "Blue";
console.log(honda);
honda.car = "Red";
console.log(honda);
honda.car = "Silver";
console.log(honda);
console.log(honda.car);

honda.rentACar("Silver");
console.log(honda.car);

honda.returnCar("pink");
console.log(honda.car);
