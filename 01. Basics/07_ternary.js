// ==================== TERNARY OPERATOR ====================

// 1. Basic ternary
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Basic ternary:", status);

// 2. Nested ternary
let marks = 75;
let grade = (marks >= 90) ? "A" : (marks >= 75) ? "B" : "C";
console.log("Nested ternary:", grade);

// 3. Assign value to variable
let num = 10;
let parity = (num%2===0) ? "Even" : "Odd";
console.log("Parity:", parity);

// 4. Inline ternary in console.log
console.log((num>5) ? "Greater than 5" : "Less or equal 5");

// 5. Using ternary for default value
let input;
let value = input ? input : "Default value";
console.log("Default with ternary:", value);

// 6. Using ternary with function calls
function greet(msg){ console.log(msg); }
(age>=18) ? greet("Welcome!") : greet("Too young!");

// 7. Ternary with multiple operations
let x = 5, y = 10;
(x>y) ? console.log("X bigger") : console.log("Y bigger");

// 8. Boolean assignment
let isAdult = (age>=18) ? true : false;
console.log("Boolean using ternary:", isAdult);

// 9. Shorter boolean ternary
let hasAccess = (age>=18);
console.log("Shorter boolean:", hasAccess);

// 10. Summary
/*
Ternary operator:
- Syntax: condition ? expressionIfTrue : expressionIfFalse
- Can be nested
- Can be used for assignment, logging, or function calls
- Useful for inline conditional execution
*/
