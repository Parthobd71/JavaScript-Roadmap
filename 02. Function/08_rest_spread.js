// =====================================
// 08 - REST PARAMETERS & SPREAD OPERATOR
// =====================================
// Rest collects arguments, spread expands arrays/objects

// Example 1: Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("SumAll:", sumAll(1, 2, 3, 4));

// Example 2: Rest with named parameters
function greet(first, second, ...others) {
    console.log(first, second, others);
}
greet("Partho", "Kumar", "Monir", "Sabbir");

// Example 3: Spread in array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread Array:", arr2);

// Example 4: Spread in object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Spread Object:", obj2);

// Example 5: Function call with spread
const nums = [5, 10, 15];
console.log("Max value:", Math.max(...nums));

// Example 6: Copy array using spread
const copyArr = [...arr1];
console.log("Copy:", copyArr);

// Example 7: Merge arrays
const arr3 = [7, 8];
const merged = [...arr1, ...arr3];
console.log("Merged arrays:", merged);

// Example 8: Combine objects
const extra = { d: 4 };
const combinedObj = { ...obj1, ...extra };
console.log("Combined object:", combinedObj);

// Example 9: Rest in destructuring
const [first, ...restNums] = [1, 2, 3, 4, 5];
console.log("First:", first, "Rest:", restNums);

// Example 10: Rest with objects
const { a, ...othersObj } = combinedObj;
console.log("a:", a, "Others:", othersObj);
