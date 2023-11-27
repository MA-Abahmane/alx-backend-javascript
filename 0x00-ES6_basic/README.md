# ES6 Cheatsheet

ES6, also known as ECMAScript 2015, introduced many new features and improvements to JavaScript. Here's a quick reference guide:


## 1. Variables

### `let` and `const`

let variableName = value;
const constantName = value;


## 2. Arrow Functions

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;


## 3. Template Literals

const name = 'World';
console.log(`Hello, ${name}!`);


## 4. Destructuring Assignment

const person = { name: 'John', age: 30 };

// Object destructuring
const { name, age } = person;

// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;


## 5. Spread and Rest Operators

// Spread operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

// Rest operator
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);


## 6. Classes

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal('Dog');
dog.speak();


## 7. Promises

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};


## 8. Modules

// Exporting module
export const myFunction = () => {
  // code
};

// Importing module
import { myFunction } from './myModule';


## 9. Default Parameters

const greet = (name = 'Guest') => {
  console.log(`Hello, ${name}!`);
};


## 10. Map, Filter, and Reduce


const numbers = [1, 2, 3, 4];

// Map
const doubled = numbers.map(num => num * 2);

// Filter
const evens = numbers.filter(num => num % 2 === 0);

// Reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
