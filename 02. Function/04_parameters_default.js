// =====================================
// 04 - PARAMETERS & DEFAULT VALUES
// =====================================
// Default parameters allow assigning fallback values to parameters

// Example 1: Function with default parameter
function greet(name = "Guest") {
    console.log("Hello,", name);
}
greet();
greet("Partho");

// Example 2: Multiple default parameters
function add(a = 0, b = 0) {
    return a + b;
}
console.log("Add with defaults:", add(), add(5));

// Example 3: Default with string
function welcomeMessage(user = "Unknown") {
    console.log(`Welcome, ${user}!`);
}
welcomeMessage();
welcomeMessage("Kumar");

// Example 4: Default parameter depending on another
function makeUser(name, role = "user") {
    return { name, role };
}
console.log("User:", makeUser("Partho"));
console.log("Admin:", makeUser("Kumar", "admin"));

// Example 5: Using expressions as defaults
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log("Square:", power(5));
console.log("Cube:", power(5, 3));

// Example 6: Default with arrays
function printList(items = []) {
    console.log("Items:", items);
}
printList();
printList([1, 2, 3]);

// Example 7: Default with functions
function logTime(time = new Date().toLocaleTimeString()) {
    console.log("Time:", time);
}
logTime();
logTime("10:30 PM");

// Example 8: Undefined triggers default
function greetAgain(name = "Friend") {
    console.log("Hi,", name);
}
greetAgain(undefined);
greetAgain("Monir");

// Example 9: Null does NOT trigger default
function sayHello(name = "Buddy") {
    console.log("Hello,", name);
}
sayHello(null); // prints null

// Example 10: Default with object destructuring
function showUser({ name = "Guest", age = 0 } = {}) {
    console.log(`Name: ${name}, Age: ${age}`);
}
showUser();
showUser({ name: "Partho", age: 25 });
