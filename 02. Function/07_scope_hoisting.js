// =====================================
// 07 - FUNCTION SCOPE & HOISTING
// =====================================
// Understanding how variables/functions are accessed and hoisted

// Example 1: Function scope
function outer() {
    let outerVar = "I'm outside!";
    function inner() {
        console.log(outerVar); // can access outerVar
    }
    inner();
}
outer();

// Example 2: Block scope with let/const
{
    let x = 10;
    const y = 20;
    console.log(x, y); // accessible here
}
// console.log(x, y); // Error: x and y are not defined

// Example 3: Global vs local variable
let globalVar = "Global";
function checkScope() {
    let localVar = "Local";
    console.log(globalVar); // accessible
    console.log(localVar); // accessible
}
checkScope();
// console.log(localVar); // Error: localVar not accessible globally

// Example 4: Hoisting with function declarations
hoistedFunc(); // Works because function is hoisted
function hoistedFunc() {
    console.log("Hoisted function called!");
}

// Example 5: Hoisting with var
console.log(hoistedVar); // undefined
var hoistedVar = 5;

// Example 6: Hoisting with let/const
// console.log(notHoisted); // Error
let notHoisted = 10;

// Example 7: Nested function scopes
function outer2() {
    let a = 1;
    function middle() {
        let b = 2;
        function inner() {
            let c = 3;
            console.log(a, b, c); // all accessible
        }
        inner();
    }
    middle();
}
outer2();

// Example 8: Using global object (window in browser)
var testVar = "Hello";
console.log(window.testVar); // in browser environment

// Example 9: Shadowing
let value = 10;
function shadowExample() {
    let value = 20; // shadows outer value
    console.log("Inside function:", value);
}
shadowExample();
console.log("Outside function:", value);

// Example 10: IIFE scope isolation
(function () {
    let temp = 100;
    console.log("Inside IIFE:", temp);
})();
// console.log(temp); // Error: temp not defined
