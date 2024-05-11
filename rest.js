function sum(...num) {
  console.log(num);
  let add = 0;
  for (const i of num) {
    add += i;
  }
  return add;
}

console.log(sum(1, 2, 3, 4, "a"));

function person(name = "anil", age = 30, ...args) {
  return {
    name,
    age,
    skills: args,
  };
}

const p1 = person("priyanka", 70);

console.log(p1);

const a1 = [1, 2, 3, 4, 5];

function example() {
  return [1, 2];
}



const [num1, num2, ...rest] = example();
console.log(num1, num2, rest);
