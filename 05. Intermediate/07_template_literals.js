// =====================================
// 01 - TEMPLATE LITERALS (ES6+)
// =====================================
// NOTES:
// Template literals use backticks ``
// Allow interpolation with ${}
// Support multi-line strings and expressions

// Example 1: Basic interpolation
const name = "Partho";
console.log(`Hello, ${name}!`);

// Example 2: Multi-line string
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

// Example 3: Expression inside template
const a=5, b=10;
console.log(`Sum of ${a} + ${b} = ${a+b}`);

// Example 4: Function inside template
function greet(n){ return `Hello ${n}`; }
console.log(`${greet("Kumar")}, welcome!`);

// Example 5: Conditional in template
const age = 20;
console.log(`You are ${age>=18 ? "an adult" : "a minor"}`);

// Example 6: Nested templates
const user = {name:"Partho", age:25};
console.log(`Name: ${user.name}, Info: ${`Age: ${user.age}`}`);

// Example 7: Tagged template
function tag(strings, value){
    return `${strings[0]}<<${value}>>${strings[1]}`;
}
const result = tag`Hello ${name}!`;
console.log(result);

// Example 8: Escape characters
const text = `He said: "I am fine"`;
console.log(text);

// Example 9: Array join with template
const fruits = ["apple","banana","orange"];
console.log(`Fruits: ${fruits.join(", ")}`);

// Example 10: Template with method calls
console.log(`Uppercase name: ${name.toUpperCase()}`);
