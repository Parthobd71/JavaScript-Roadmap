// =====================================
// 10 - HIGHER-ORDER FUNCTIONS (HOF)
// =====================================
// A higher-order function either takes a function as an argument or returns a function
// They allow composition, abstraction, and functional programming style

// Example 1: Function taking a function
function processNumber(num, fn) {
    return fn(num);
}
console.log("Square using HOF:", processNumber(5, n => n * n));

// Example 2: Function returning a function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log("Double:", double(8));

// Example 3: Array map (HOF)
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);
console.log("Squared:", squared);

// Example 4: Array filter (HOF)
const evens = nums.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// Example 5: Array reduce (HOF)
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// Example 6: Compose multiple HOF
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
const add1 = x => x + 1;
const doubleFn = x => x * 2;
const combined = compose(doubleFn, add1);
console.log("Compose result:", combined(5)); // (5+1)*2 = 12

// Example 7: HOF with objects
const users = [{name: "Partho", age:25}, {name:"Kumar", age:30}];
const names = users.map(u => u.name);
console.log("Names:", names);

// Example 8: HOF in event simulation
function onEvent(callback) {
    console.log("Event triggered");
    callback();
}
onEvent(() => console.log("Callback executed on event"));

// Example 9: Custom forEach HOF
function myForEach(arr, callback) {
    for(let i=0;i<arr.length;i++){
        callback(arr[i], i);
    }
}
myForEach([10,20,30], (val, index) => console.log(`Index ${index}:`, val));

// Example 10: HOF returning another HOF
function makePower(exponent) {
    return function(base) {
        return base ** exponent;
    };
}
const squareFn = makePower(2);
console.log("Square 7:", squareFn(7));
const cubeFn = makePower(3);
console.log("Cube 3:", cubeFn(3));
