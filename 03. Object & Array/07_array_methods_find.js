// =====================================
// 07 - ARRAY METHOD: FIND
// =====================================

// Example 1: Find first even number
const numbers = [1,3,4,6];
const firstEven = numbers.find(n => n%2===0);
console.log("First even:", firstEven);

// Example 2: Find object by property
const users = [{name:"Partho", age:25},{name:"Kumar", age:30}];
const user30 = users.find(u => u.age===30);
console.log(user30);

// Example 3: Find string starting with letter
const names = ["Partho","Kumar","Monir"];
const startsM = names.find(n => n.startsWith("M"));
console.log(startsM);

// Example 4: Find with index
const nums = [10,20,30,40];
const found = nums.find((n,i)=>i>1 && n>25);
console.log(found);

// Example 5: Find undefined if not exists
const missing = numbers.find(n => n>100);
console.log(missing); // undefined

// Example 6: Complex condition
const complex = numbers.find(n => n%2===0 && n>4);
console.log(complex);

// Example 7: Find in nested objects
const products = [{id:1,name:"A"},{id:2,name:"B"}];
const productB = products.find(p=>p.name==="B");
console.log(productB);

// Example 8: Function reference
function isEven(n){ return n%2===0; }
console.log(numbers.find(isEven));

// Example 9: Using find with array of arrays
const arr2d = [[1,2],[3,4]];
const sub = arr2d.find(a => a.includes(4));
console.log(sub);

// Example 10: Short-circuit usage
const foundNum = numbers.find(n=>n>0) || 0;
console.log(foundNum);
