interface Person {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Ohwoo",
  age: 30,
  gender: "male",
};

const sayHi = (person: Person) => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
