// =====================================
// 02 - HIGHER-ORDER FUNCTIONS (ADVANCED)
// =====================================
// Functions that accept functions or return functions

// Example 1: Function taking another function
function processNumber(num, fn){
    return fn(num);
}
console.log("Square:", processNumber(5, n => n*n));

// Example 2: Function returning a function
function multiplier(factor){
    return function(num){ return num*factor; };
}
const double = multiplier(2);
console.log("Double:", double(8));

// Example 3: Array map (HOF)
const nums = [1,2,3];
console.log("Squares:", nums.map(n=>n*n));

// Example 4: Array filter (HOF)
console.log("Evens:", nums.filter(n=>n%2===0));

// Example 5: Array reduce (HOF)
console.log("Sum:", nums.reduce((acc,n)=>acc+n,0));

// Example 6: Compose functions
function compose(f,g){
    return function(x){ return f(g(x)); };
}
const add1 = x=>x+1;
const doubleFn = x=>x*2;
console.log("Compose:", compose(doubleFn, add1)(5)); // (5+1)*2 = 12

// Example 7: HOF with objects
const users = [{name:"Partho",age:25},{name:"Kumar",age:30}];
console.log("Names:", users.map(u=>u.name));

// Example 8: Event simulation HOF
function onEvent(callback){
    console.log("Event triggered");
    callback();
}
onEvent(()=>console.log("Callback executed"));

// Example 9: Custom forEach
function myForEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i], i);
    }
}
myForEach([10,20,30], (val,index)=>console.log(index,val));

// Example 10: HOF returning another HOF
function makePower(exp){ return function(base){ return base**exp; }; }
const square = makePower(2);
console.log("Square 7:", square(7));
const cube = makePower(3);
console.log("Cube 3:", cube(3));
