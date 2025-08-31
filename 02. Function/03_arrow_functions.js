// =====================================
// 03 - ARROW FUNCTIONS
// =====================================
// Arrow functions provide a shorter syntax for writing functions.
// They do not have their own 'this' keyword, useful in many cases.

// Example 1: Basic arrow function
const greet = () => console.log("Hello from arrow function!");
greet();

// Example 2: Arrow function with parameters
const greetUser = (name) => console.log("Welcome,", name);
greetUser("Partho");

// Example 3: One parameter (parentheses optional)
const square = n => n * n;
console.log("Square of 7:", square(7));

// Example 4: Multiple parameters
const add = (a, b) => a + b;
console.log("Add:", add(4, 5));

// Example 5: Arrow function with block body
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log("Multiply:", multiply(3, 6));

// Example 6: Returning objects (need parentheses)
const createUser = (name, age) => ({ name, age });
console.log("User:", createUser("Partho", 25));

// Example 7: Arrow function in array map
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Example 8: Arrow function in filter
let evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens);

// Example 9: Arrow in reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Example 10: Difference of 'this'
function normalFunction() {
    console.log("Normal:", this);
}
const arrowFunction = () => {
    console.log("Arrow:", this);
};
normalFunction();   // 'this' depends on caller
arrowFunction();    // 'this' is lexical (comes from outer scope)
