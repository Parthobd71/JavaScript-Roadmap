// =====================================
// 08 - ARRAY METHODS: SOME & EVERY
// =====================================

// Example 1: some() basic
const numbers = [1,2,3,4];
const hasEven = numbers.some(n => n%2===0);
console.log("Has even?", hasEven);

// Example 2: every() basic
const allPositive = numbers.every(n => n>0);
console.log("All positive?", allPositive);

// Example 3: some() with objects
const users = [{name:"Partho", age:25},{name:"Kumar", age:30}];
const anyAdult = users.some(u => u.age>=30);
console.log("Any adult?", anyAdult);

// Example 4: every() with objects
const allAdults = users.every(u => u.age>=18);
console.log("All adults?", allAdults);

// Example 5: some() false case
const numbers2 = [1,3,5];
console.log("Some even?", numbers2.some(n => n%2===0));

// Example 6: every() false case
console.log("Every >5?", numbers2.every(n => n>5));

// Example 7: Complex condition
const hasBig = numbers.some(n => n>3 && n%2===0);
console.log("Has number >3 and even?", hasBig);

// Example 8: Combined some & every
const mixed = [2,4,6];
console.log("All even?", mixed.every(n=>n%2===0));
console.log("Some >4?", mixed.some(n=>n>4));

// Example 9: Using functions
function isEven(n){ return n%2===0; }
console.log("Some even using function:", numbers.some(isEven));
console.log("Every even using function:", numbers.every(isEven));

// Example 10: Short-circuit usage
const safeCheck = numbers.some(n=>n>100) || false;
console.log("Safe check:", safeCheck);
