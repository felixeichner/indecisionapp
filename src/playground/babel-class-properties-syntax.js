import React from 'react';
 
class OldSyntax {
  constructor() {
    this.name = "Felix Old";
    this.nameSentence = this.nameSentence.bind(this);
  }
  nameSentence() {
    return `My name is ${this.name}`;
  }
}

const oldMe = new OldSyntax();
const oldNameSentence = oldMe.nameSentence;
console.log(oldMe.name);
console.log(oldNameSentence());

class NewSyntax {
  name = "Felix New";
  nameSentence = () => {
    return `My name is ${this.name}`;
  }
}

const newMe = new NewSyntax();
const newNameSentence = newMe.nameSentence;
console.log(newMe.name);
console.log(newNameSentence());
