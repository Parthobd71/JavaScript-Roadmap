// =====================================
// 09 - CALLBACK FUNCTIONS
// =====================================
// A callback is a function passed as an argument to another function
// Useful for asynchronous operations, events, or processing sequences

// Example 1: Simple callback
function greet(name, callback) {
    console.log("Hello,", name);
    callback();
}
greet("Partho", () => console.log("This is a callback!"));

// Example 2: Math operation callback
function doOperation(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
console.log("Add result:", doOperation(5, 10, add));

// Example 3: Array forEach with callback
const numbers = [1, 2, 3];
numbers.forEach(num => console.log("Number:", num));

// Example 4: Array map with callback
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Example 5: Array filter with callback
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// Example 6: Simulated async with setTimeout
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}
fetchData(data => console.log(data));

// Example 7: Nested callbacks
function firstTask(cb) {
    setTimeout(() => {
        console.log("First task done");
        cb();
    }, 500);
}
function secondTask() {
    console.log("Second task done");
}
firstTask(secondTask);

// Example 8: Callback in object method
const calculator = {
    multiply: function(a, b, cb) {
        cb(a * b);
    }
};
calculator.multiply(5, 6, result => console.log("Multiply callback:", result));

// Example 9: Callback with default
function greetWithCallback(name, cb = () => console.log("Default callback")) {
    console.log("Hello", name);
    cb();
}
greetWithCallback("Partho");
greetWithCallback("Kumar", () => console.log("Custom callback"));

// Example 10: Real-world style simulation
function loadUserData(userId, callback) {
    const users = [{ id: 1, name: "Partho" }, { id: 2, name: "Kumar" }];
    const user = users.find(u => u.id === userId);
    setTimeout(() => {
        callback(user);
    }, 500);
}
loadUserData(2, user => console.log("Loaded user:", user));
