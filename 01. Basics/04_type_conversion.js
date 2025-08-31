// ==================== TYPE CONVERSION ====================

// 1. String to Number
let strNum = "123";
console.log("String to Number:", Number(strNum), typeof Number(strNum));

// 2. Number to String
let numVal = 456;
console.log("Number to String:", String(numVal), typeof String(numVal));

// 3. Boolean conversion
console.log("Boolean of 0:", Boolean(0)); // false
console.log("Boolean of 1:", Boolean(1)); // true
console.log("Boolean of '' (empty string):", Boolean('')); // false
console.log("Boolean of 'Hello':", Boolean('Hello')); // true

// 4. Implicit conversion (type coercion)
console.log("5 + '5' =", 5+'5'); // string concatenation
console.log("'10' - 5 =", '10'-5); // 5, string converted to number
console.log("'10'*2 =", '10'*2); // 20
console.log("'10'/2 =", '10'/2); // 5

// 5. parseInt and parseFloat
let floatStr = "12.34";
console.log("parseInt:", parseInt(floatStr)); // 12
console.log("parseFloat:", parseFloat(floatStr)); // 12.34

// 6. Unary plus
let strVal = "100";
console.log("Unary plus:", +strVal); // converts to number

// 7. String concatenation
let num1 = 5;
let str1 = " apples";
console.log("Number + String =", num1 + str1);

// 8. Boolean conversion in conditions
if(Boolean("")) console.log("This won't run");
if(Boolean("Hello")) console.log("This will run");

// 9. Using template literals
let age = 25;
console.log(`Age is ${age}`);

// 10. Summary
/*
Type conversion in JS:
- Explicit: Number(), String(), Boolean(), parseInt(), parseFloat()
- Implicit: JS automatically converts types in expressions
- Use template literals for easy string interpolation
*/
