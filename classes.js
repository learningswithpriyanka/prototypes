class Animal {
  constructor(name="ravi") {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.breed} barks`);
  }
}
const a1 = new Dog("Shifu", "Lab");

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log("Hello, I am a ", name);
// };

// const p1 = new Person("priyanka");
// const p2 = new Person("ravi");
