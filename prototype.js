//Object literal
// const person = {
//   name: "priyanka",
//   age: 10,
// };

// Object.create
// const superman = Object.create(person);
// console.log("Superman: ",superman);
// console.log("Person: ", person);

// const person = {
//   name: "priyanka",
//   greet: function () {
//     console.log("Hello, I am a ", this.name);
//   },
// };
// console.log("Person: ", person);

// const superperson = {
//   name: "Ravi",
//   greet: function () {
//     console.log("Hello, I am a ", this.name);
//   },
// };

// console.log("SuperPerson: ", superperson);

//Factory functions (Design patterns)

const myProto = {
  greet: function () {
    console.log("Hello, I am a ", name);
  },
};
function personFactory(name) {
  return Object.create(myProto, {
    name: {
      value: name,
    },
  });
}

const p3 = personFactory("Priyanka");
const p4 = personFactory("Ravi");

//constructor functions

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hello, I am a ", name);
};

const p1 = new Person("priyanka");
const p2 = new Person("ravi");

// console.log("P1:", p1);
// console.log("P2:", p2);
