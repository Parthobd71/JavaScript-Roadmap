// =====================================
// 02 - FUNCTION EXPRESSIONS
// =====================================
// A function expression is when a function is assigned to a variable.
// Can be named or anonymous. Useful for callbacks, modular code.

// Example 1: Basic function expression
const greet = function() {
    console.log("Hello from a function expression!");
};
greet();

// Example 2: Function expression with parameters
const greetUser = function(name) {
    console.log("Welcome,", name);
};
greetUser("Partho");

// Example 3: Return value in function expression
const square = function(n) {
    return n * n;
};
console.log("Square:", square(6));

// Example 4: Anonymous function stored in variable
let add = function(a, b) {
    return a + b;
};
console.log("Add:", add(3, 4));

// Example 5: Function expression as object property
let calculator = {
    multiply: function(a, b) {
        return a * b;
    }
};
console.log("Multiply:", calculator.multiply(4, 5));

// Example 6: Pass function expression as argument
function doOperation(operation, x, y) {
    return operation(x, y);
}
let subtract = function(a, b) { return a - b; };
console.log("Subtract:", doOperation(subtract, 10, 5));

// Example 7: Store function in array
let operations = [
    function(x) { return x + 1; },
    function(x) { return x * 2; }
];
console.log("Operations:", operations , operations );

// Example 8: Named function expression (rare)
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
console.log("Factorial of 5:", factorial(5));

// Example 9: Function expression returning function
const makeMultiplier = function(factor) {
    return function(num) {
        return num * factor;
    };
};
let double = makeMultiplier(2);
console.log("Double 8:", double(8));

// Example 10: Using expression for short utility
const isEven = function(num) { return num % 2 === 0; };
console.log("Is 11 even?", isEven(11));
