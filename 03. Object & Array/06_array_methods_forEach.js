// =====================================
// 06 - ARRAY METHOD: FOREACH
// =====================================

// Example 1: Simple iteration
const numbers = [1,2,3];
numbers.forEach(n => console.log(n));

// Example 2: Iteration with index
numbers.forEach((n,i) => console.log(`Index ${i}: ${n}`));

// Example 3: Iterating objects array
const users = [{name:"Partho"},{name:"Kumar"}];
users.forEach(u => console.log(u.name));

// Example 4: Modify array inside forEach
let arr = [1,2,3];
arr.forEach((n,i,a)=> a[i]=n*2);
console.log(arr);

// Example 5: ForEach with condition
numbers.forEach(n => { if(n%2===0) console.log("Even:", n); });

// Example 6: Nested forEach
const matrix = [[1,2],[3,4]];
matrix.forEach(row => row.forEach(n => console.log(n)));

// Example 7: Using function reference
function printNum(n){ console.log("Num:", n); }
numbers.forEach(printNum);

// Example 8: Side effects
let total = 0;
numbers.forEach(n => total+=n);
console.log("Total:", total);

// Example 9: ForEach with objects and index
users.forEach((u,i)=> console.log(`${i+1}: ${u.name}`));

// Example 10: ForEach vs map
const doubled = [];
numbers.forEach(n=>doubled.push(n*2));
console.log("Doubled using forEach:", doubled);
