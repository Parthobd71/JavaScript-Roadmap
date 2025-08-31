// =====================================
// 01 - FUNCTION DECLARATION
// =====================================
// Function Declaration = named function created with the 'function' keyword
// Functions are reusable blocks of code

// Example 1: Simple function
function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}
greet(); // call the function

// Example 2: Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Partho");

// Example 3: Function with multiple parameters
function add(a, b) {
    console.log("Sum:", a + b);
}
add(5, 10);

// Example 4: Function returning a value
function multiply(a, b) {
    return a * b;
}
console.log("Multiply result:", multiply(4, 5));

// Example 5: Using return in different ways
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 10 even?", isEven(10));

// Example 6: Function inside another function
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction(5);
}
console.log("Outer + Inner:", outerFunction(10));

// Example 7: Function with no return (undefined)
function logMessage(message) {
    console.log("Message:", message);
}
let result = logMessage("This just logs, no return value");
console.log("Returned value is:", result); // undefined

// Example 8: Defaulting to undefined if no args
function sayHello(name) {
    console.log("Hello", name);
}
sayHello(); // Hello undefined

// Example 9: Function reusability
function square(num) {
    return num * num;
}
console.log("Square of 8:", square(8));
console.log("Square of 12:", square(12));

// Example 10: Simple utility function
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}
console.log("25°C =", celsiusToFahrenheit(25), "°F");
