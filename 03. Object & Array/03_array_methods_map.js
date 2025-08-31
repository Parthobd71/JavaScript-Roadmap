// =====================================
// 03 - ARRAY METHOD: MAP
// =====================================

// Example 1: Basic map
const numbers = [1,2,3];
const doubled = numbers.map(n => n*2);
console.log(doubled);

// Example 2: Map with objects
const users = [{name:"Partho"}, {name:"Kumar"}];
const names = users.map(u => u.name);
console.log(names);

// Example 3: Map with index
const squares = numbers.map((n,i) => n*i);
console.log(squares);

// Example 4: Map returning objects
const usersWithId = users.map((u,i)=>({id:i+1, ...u}));
console.log(usersWithId);

// Example 5: Map chaining
const plusOneSquared = numbers.map(n=>n+1).map(n=>n*n);
console.log(plusOneSquared);

// Example 6: Using function inside map
function double(n){ return n*2; }
console.log(numbers.map(double));

// Example 7: Map with conditional
const conditional = numbers.map(n => n%2===0 ? n*10 : n);
console.log(conditional);

// Example 8: Map with string transformation
const namesUpper = names.map(n => n.toUpperCase());
console.log(namesUpper);

// Example 9: Map returning different type
const boolArr = numbers.map(n => n>1);
console.log(boolArr);

// Example 10: Map with template literals
const greeting = names.map(n => `Hello ${n}!`);
console.log(greeting);
