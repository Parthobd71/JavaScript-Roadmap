// ==================== VARIABLES IN JAVASCRIPT ====================

// 1. let - block scoped variable
let x = 10;
console.log("let x =", x);

// 2. const - constant, cannot be reassigned
const y = 20;
console.log("const y =", y);

// 3. var - function scoped variable
var z = 30;
console.log("var z =", z);

// Scope examples
if(true){
    let a = 5; // block scoped
    var b = 6; // function scoped
    console.log("Inside block - a =", a, "b =", b);
}
// console.log(a); // Error
console.log("Outside block - b =", b);

// Reassignment
x = 15; // allowed
console.log("Reassigned let x =", x);
// y = 25; // Error! const cannot be reassigned
b = 10; // allowed
console.log("Reassigned var b =", b);

// Multiple declarations
let p = 1, q = 2, r = 3;
console.log("Multiple let:", p, q, r);
var m = 4, n = 5;
console.log("Multiple var:", m, n);

// Redeclaration
// let x = 100; // Error
var z = 50; // allowed
console.log("Redeclared var z =", z);

// Dynamic typing
let dynamic = "Hello";
console.log("Dynamic type string:", dynamic);
dynamic = 123;
console.log("Dynamic type number:", dynamic);

// Undefined variables
let undef;
console.log("Undefined variable:", undef);

// Null example
let nullVar = null;
console.log("Null variable:", nullVar);

// Summary notes
/*
Variables in JS:
- let: block scoped, can be reassigned, cannot redeclare
- const: block scoped, cannot reassign
- var: function scoped, can redeclare
- JS variables are dynamically typed
*/
