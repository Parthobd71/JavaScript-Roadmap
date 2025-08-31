// ==================== OPERATORS ====================

// Arithmetic
let a = 10, b = 3;
console.log("Add:", a+b);
console.log("Subtract:", a-b);
console.log("Multiply:", a*b);
console.log("Divide:", a/b);
console.log("Modulo:", a%b);
console.log("Exponent:", a**b);

// Comparison
console.log("a > b:", a>b);
console.log("a < b:", a<b);
console.log("a == b:", a==b);
console.log("a != b:", a!=b);
console.log("a === b:", a===b); // strict equality
console.log("a !== b:", a!==b);

// Logical
console.log("AND:", true && false);
console.log("OR:", true || false);
console.log("NOT:", !true);

// Assignment operators
let c = 5;
c += 3; console.log("c += 3:", c);
c -= 2; console.log("c -= 2:", c);
c *= 2; console.log("c *= 2:", c);
c /= 3; console.log("c /= 3:", c);
c %= 2; console.log("c %= 2:", c);
c **= 3; console.log("c **= 3:", c);

// Increment / Decrement
let i = 0;
console.log("i++:", i++);
console.log("++i:", ++i);
console.log("i--:", i--);
console.log("--i:", --i);

// Ternary operator (example)
let age = 18;
let status = age>=18 ? "Adult" : "Minor";
console.log("Ternary:", status);

// Summary
/*
Operators in JS:
- Arithmetic: +, -, *, /, %, **
- Comparison: ==, ===, !=, !==, >, <, >=, <=
- Logical: &&, ||, !
- Assignment: =, +=, -=, etc.
- Increment/Decrement: ++, --
- Ternary: condition ? expr1 : expr2
*/
