// =====================================
// 02 - DESTRUCTURING (ES6+)
// =====================================
// NOTES:
// Allows unpacking arrays or objects into variables
// Makes code cleaner and easier to read

// Example 1: Array destructuring
const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a,b,c);

// Example 2: Skip elements
const [x,,y] = numbers;
console.log(x,y);

// Example 3: Default values
const [p,q,r=10] = [5,6];
console.log(p,q,r);

// Example 4: Swap variables
let m=1, n=2;
[m,n] = [n,m];
console.log(m,n);

// Example 5: Object destructuring
const user = {name:"Partho", age:25};
const {name, age} = user;
console.log(name, age);

// Example 6: Destructuring with new variable names
const {name: uname, age: uage} = user;
console.log(uname, uage);

// Example 7: Nested object destructuring
const nested = {id:1, info:{city:"Dhaka", country:"Bangladesh"}};
const {info:{city,country}} = nested;
console.log(city,country);

// Example 8: Function parameter destructuring
function greet({name, age}){ console.log(`Hello ${name}, age ${age}`); }
greet(user);

// Example 9: Array in object destructuring
const obj = {arr:[10,20,30]};
const {arr:[first,,third]} = obj;
console.log(first, third);

// Example 10: Default values in destructuring
const {lang="JS"} = {};
console.log(lang);
