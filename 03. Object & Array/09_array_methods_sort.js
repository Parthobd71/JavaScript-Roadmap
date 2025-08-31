// =====================================
// 09 - ARRAY METHOD: SORT
// =====================================

// Example 1: Sort numbers (default lexicographic)
const numbers = [10,2,30,4];
numbers.sort();
console.log("Default sort:", numbers);

// Example 2: Sort numbers correctly
numbers.sort((a,b)=>a-b);
console.log("Ascending:", numbers);

// Example 3: Sort descending
numbers.sort((a,b)=>b-a);
console.log("Descending:", numbers);

// Example 4: Sort strings
const names = ["Partho","Kumar","Monir"];
names.sort();
console.log("Sorted names:", names);

// Example 5: Sort strings reverse
names.sort((a,b)=>b.localeCompare(a));
console.log("Reverse sorted names:", names);

// Example 6: Sort objects by property
const users = [{name:"Partho", age:25},{name:"Kumar", age:30}];
users.sort((a,b)=>a.age-b.age);
console.log("Sorted by age:", users);

// Example 7: Sort objects by name
users.sort((a,b)=>a.name.localeCompare(b.name));
console.log("Sorted by name:", users);

// Example 8: Sort with custom logic
const mixed = [1, -3, 2, 0];
mixed.sort((a,b)=>Math.abs(a)-Math.abs(b));
console.log("Sort by absolute value:", mixed);

// Example 9: Chaining sort
const nums = [5,3,8,1];
const sortedDoubled = nums.sort((a,b)=>a-b).map(n=>n*2);
console.log("Sorted & doubled:", sortedDoubled);

// Example 10: Copy before sort
const copy = [...numbers].sort((a,b)=>a-b);
console.log("Original:", numbers, "Copy sorted:", copy);
