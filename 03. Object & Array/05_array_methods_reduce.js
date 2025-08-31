// =====================================
// 05 - ARRAY METHOD: REDUCE
// =====================================

// Example 1: Sum of numbers
const numbers = [1,2,3,4];
const sum = numbers.reduce((acc, n) => acc+n, 0);
console.log("Sum:", sum);

// Example 2: Product of numbers
const product = numbers.reduce((acc, n) => acc*n, 1);
console.log("Product:", product);

// Example 3: Max value
const max = numbers.reduce((acc,n)=> n>acc ? n:acc, numbers[0]);
console.log("Max:", max);

// Example 4: Min value
const min = numbers.reduce((acc,n)=> n<acc ? n:acc, numbers[0]);
console.log("Min:", min);

// Example 5: Flatten nested array
const nested = [[1,2],[3,4],[5]];
const flat = nested.reduce((acc, arr)=> acc.concat(arr), []);
console.log("Flattened:", flat);

// Example 6: Count occurrences
const fruits = ["apple","banana","apple","orange","banana"];
const count = fruits.reduce((acc, f)=>{
    acc[f] = (acc[f] || 0)+1;
    return acc;
},{});
console.log("Occurrences:", count);

// Example 7: Average value
const avg = numbers.reduce((acc,n,i,arr)=> acc+n/arr.length, 0);
console.log("Average:", avg);

// Example 8: Reduce to object
const users = [{name:"Partho", age:25},{name:"Kumar", age:30}];
const userObj = users.reduce((acc,u)=>{ acc[u.name]=u.age; return acc; }, {});
console.log(userObj);

// Example 9: Concatenate strings
const words = ["Hello","World"];
const sentence = words.reduce((acc,w)=> acc+" "+w,"");
console.log("Sentence:", sentence);

// Example 10: Reduce with complex logic
const complex = [1,2,3,4];
const mappedSum = complex.reduce((acc,n)=> acc + n*2, 0);
console.log("Mapped sum:", mappedSum);
