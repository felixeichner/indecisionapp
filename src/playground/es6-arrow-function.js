function square(x) {
  return x ** 2;
}

// const squareArrow = (x) => {
//   return x ** 2;
// }

const squareArrow = (x) => x ** 2;

console.log("Regular Function: " + square(3));
console.log("Arrow Function: " + squareArrow(4));

const fullName = "Felix Eichner";
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
}
const getLastName = (fullName) => fullName.split(" ")[1];

console.log(fullName + ": " + getFirstName(fullName) + " " + getLastName(fullName));