// =====================================
// 01 - CALLBACK FUNCTIONS (ADVANCED)
// =====================================
// Functions passed as arguments to other functions
// Essential for async programming and handling events

// Example 1: Basic callback
function greet(name, callback){
    console.log("Hello", name);
    callback();
}
greet("Partho", ()=>console.log("Callback executed!"));

// Example 2: Callback with arguments
function calculate(a,b, callback){
    return callback(a,b);
}
console.log("Sum:", calculate(5,10,(x,y)=>x+y));

// Example 3: Array forEach
[1,2,3].forEach(n => console.log("Number:", n));

// Example 4: Array map with callback
const doubled = [1,2,3].map(n => n*2);
console.log("Doubled:", doubled);

// Example 5: Array filter
const evens = [1,2,3,4].filter(n=>n%2===0);
console.log("Evens:", evens);

// Example 6: Nested callbacks
function firstTask(cb){
    setTimeout(()=>{
        console.log("First task done");
        cb();
    }, 500);
}
function secondTask(){ console.log("Second task done"); }
firstTask(secondTask);

// Example 7: Simulated async
function fetchData(callback){
    setTimeout(()=>{ callback("Data loaded!") }, 1000);
}
fetchData(data => console.log(data));

// Example 8: Callback in object method
const calculator = {
    multiply: function(a,b, cb){
        cb(a*b);
    }
};
calculator.multiply(5,6, result => console.log("Multiply:", result));

// Example 9: Default callback
function greetWithDefault(name, cb = ()=>console.log("Default callback")) {
    console.log("Hello", name);
    cb();
}
greetWithDefault("Kumar");
greetWithDefault("Monir", ()=>console.log("Custom callback"));

// Example 10: Real-world style
function loadUser(id, callback){
    const users = [{id:1,name:"Partho"},{id:2,name:"Kumar"}];
    const user = users.find(u=>u.id===id);
    setTimeout(()=>{ callback(user); }, 500);
}
loadUser(2, user => console.log("Loaded user:", user));
