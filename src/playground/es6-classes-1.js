class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I'm ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` His/her major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Felix Eichner', 38, 'Berlin');
const other = new Traveler();
console.log(me, other);
console.log(me.getGreeting());
console.log(other.getGreeting());
console.log(me.getDescription());
console.log(other.getDescription());
console.log(!!me.major ? `${me.name}'s major is ${me.major}` : `${me.name} has no major`);
console.log(!!other.major ? `${other.name}'s major is ${other.major}` : `${other.name} has no major`);