// =====================================
// 04 - ARRAY METHOD: FILTER
// =====================================

// Example 1: Basic filter
const numbers = [1,2,3,4,5];
const evens = numbers.filter(n => n%2===0);
console.log(evens);

// Example 2: Filter objects
const users = [{name:"Partho", age:25},{name:"Kumar", age:30}];
const adults = users.filter(u => u.age>=30);
console.log(adults);

// Example 3: Filter with string
const names = ["Partho","Kumar","Monir"];
const filtered = names.filter(n => n.startsWith("M"));
console.log(filtered);

// Example 4: Filter with index
const numsWithIndex = numbers.filter((n,i)=>i%2===0);
console.log(numsWithIndex);

// Example 5: Filter chained
const filteredDoubled = numbers.filter(n=>n>2).map(n=>n*2);
console.log(filteredDoubled);

// Example 6: Filter boolean
const boolArr = [true,false,true];
const trues = boolArr.filter(b=>b);
console.log(trues);

// Example 7: Remove falsy
const mixArr = [0,1,"",2,null,3];
const truthyArr = mixArr.filter(Boolean);
console.log(truthyArr);

// Example 8: Filter nested array
const nested = [[1],[2,3],[4,5,6]];
const nonEmpty = nested.filter(a => a.length>1);
console.log(nonEmpty);

// Example 9: Complex filter
const complex = numbers.filter(n => n%2===0 && n>2);
console.log(complex);

// Example 10: Filter with objects property
const bigAges = users.filter(u=>u.age>26).map(u=>u.name);
console.log(bigAges);
