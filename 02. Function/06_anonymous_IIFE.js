// =====================================
// 06 - ANONYMOUS & IIFE (Immediately Invoked Function Expressions)
// =====================================
// Anonymous functions have no name
// IIFE runs immediately after creation

// Example 1: Anonymous function assigned to variable
let greet = function (name) {
    return "Hello, " + name;
};
console.log(greet("Partho"));

// Example 2: Anonymous function in setTimeout
setTimeout(function () {
    console.log("Executed after 1 second");
}, 1000);

// Example 3: Anonymous function in event simulation
let numbers = [1, 2, 3];
numbers.forEach(function (n) {
    console.log("Number:", n);
});

// Example 4: IIFE basic example
(function () {
    console.log("IIFE executed immediately!");
})();

// Example 5: IIFE with parameters
(function (x, y) {
    console.log("Sum from IIFE:", x + y);
})(5, 7);

// Example 6: IIFE returning a value
let result = (function (a, b) {
    return a * b;
})(4, 6);
console.log("IIFE result:", result);

// Example 7: IIFE with arrow function
(() => {
    console.log("Arrow IIFE running...");
})();

// Example 8: IIFE creating private scope
let counter = (function () {
    let count = 0;
    return {
        increment: function () { count++; return count; },
        decrement: function () { count--; return count; },
        getCount: function () { return count; }
    };
})();
console.log("Counter++:", counter.increment());
console.log("Counter--:", counter.decrement());
console.log("Counter value:", counter.getCount());

// Example 9: IIFE for configuration
let config = (function () {
    let apiKey = "SECRET123";
    return {
        getKey: function () { return apiKey; }
    };
})();
console.log("API Key:", config.getKey());

// Example 10: IIFE for module pattern
let mathModule = (function () {
    function add(a, b) { return a + b; }
    function multiply(a, b) { return a * b; }
    return { add, multiply };
})();
console.log("Math Add:", mathModule.add(2, 3));
console.log("Math Multiply:", mathModule.multiply(2, 3));
