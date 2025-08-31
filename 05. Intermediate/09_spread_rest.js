// =====================================
// 03 - SPREAD & REST OPERATORS (ES6+)
// =====================================
// NOTES:
// Spread (...) -> expands iterable into elements
// Rest (...) -> collects multiple elements into array

// Example 1: Spread array
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];
console.log(arr2);

// Example 2: Spread object
const obj1 = {a:1,b:2};
const obj2 = {...obj1, c:3};
console.log(obj2);

// Example 3: Copy array (avoid reference)
const arrCopy = [...arr1];
console.log(arrCopy);

// Example 4: Merge arrays
const merged = [...arr1, ...arr2];
console.log(merged);

// Example 5: Function arguments with spread
function sum(x,y,z){ return x+y+z; }
const nums = [1,2,3];
console.log(sum(...nums));

// Example 6: Rest in function
function multiply(...args){
    return args.map(n=>n*2);
}
console.log(multiply(1,2,3,4));

// Example 7: Destructuring with rest
const [first, ...rest] = [10,20,30,40];
console.log(first, rest);

// Example 8: Object rest
const {a,...others} = {a:1,b:2,c:3};
console.log(a, others);

// Example 9: Spread string
const str = "Hello";
const letters = [...str];
console.log(letters);

// Example 10: Combine all
const combined = {...obj1, extra:"yes", numbers:[...arr1,99]};
console.log(combined);
