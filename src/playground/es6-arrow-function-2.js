// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  return a + b + "; " + arguments[2];
};
console.log(add(55, 1, "Hey There!"));

const addFunction = (a, b, c) => {
  return a + b + "; " + c; // + arguments[2]; arguments not accessible in arrow functions
};
console.log(addFunction(55, 1, "Hey There!"));


// this keyword - no longer bound either

const user = {
  name: "Felix",
  cities: ["Berlin", "Melbourne", "Freiburg", "Hamburg"],
  printPlaces() { // equals 'printPlaces: function() {'
    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in: " + city);
    // }); (works)

    // 'printPlaces: () => {' breaks because 'this' refers to global scope, not user

    //    const that = this;
    //    this.cities.forEach(function(city) {
    //      console.log(that.name + " has lived in: " + city); (works because of that constant)

    return this.cities.map((city) => this.name + " has lived in: " + city);
  }
};

console.log(user.printPlaces());

const multiplier = {
  numbers: [1,4,6,8],
  multiplyBy(i) {
    return this.numbers.map((number) => number * i);
  }
};

console.log(multiplier.multiplyBy(5));