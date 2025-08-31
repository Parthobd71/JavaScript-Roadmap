// =====================================
// 05 - RETURNING VALUES FROM FUNCTIONS
// =====================================
// Functions can return values to be used later.

// Example 1: Return a simple value
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum);

// Example 2: Return boolean
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 6 even?", isEven(6));
console.log("Is 7 even?", isEven(7));

// Example 3: Return a string
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Partho"));

// Example 4: Return an object
function createUser(name, age) {
    return { name, age };
}
console.log("User:", createUser("Partho", 25));

// Example 5: Return an array
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log("Range:", range(1, 5));

// Example 6: Return another function (closure)
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
let double = multiplier(2);
console.log("Double of 8:", double(8));

// Example 7: Return with early exit
function getStatus(score) {
    if (score >= 50) return "Pass";
    return "Fail";
}
console.log("Status:", getStatus(45));
console.log("Status:", getStatus(75));

// Example 8: Returning multiple values as object
function calculate(a, b) {
    return {
        sum: a + b,
        product: a * b,
        difference: a - b
    };
}
console.log("Results:", calculate(5, 3));

// Example 9: Returning multiple values as array
function stats(numbers) {
    let total = numbers.reduce((a, b) => a + b, 0);
    let avg = total / numbers.length;
    return [total, avg];
}
console.log("Stats:", stats([5, 10, 15]));

// Example 10: Return default when nothing else matches
function findColor(code) {
    if (code === "R") return "Red";
    if (code === "G") return "Green";
    return "Unknown";
}
console.log("Color:", findColor("R"));
console.log("Color:", findColor("X"));
