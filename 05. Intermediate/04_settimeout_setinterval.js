// =====================================
// 04 - setTimeout & setInterval
// =====================================
// NOTES: 
// setTimeout -> executes a function once after a delay
// setInterval -> executes a function repeatedly at fixed intervals

// Example 1: Basic setTimeout
setTimeout(()=>{
    console.log("Executed after 1 second");
}, 1000);

// Example 2: setTimeout with arguments
function greet(name){
    console.log("Hello", name);
}
setTimeout(greet, 1500, "Partho");

// Example 3: Cancel setTimeout
const timer = setTimeout(()=>console.log("This won't run"), 2000);
clearTimeout(timer);

// Example 4: Basic setInterval
let count=0;
const interval = setInterval(()=>{
    count++;
    console.log("Count:", count);
    if(count>=5) clearInterval(interval); // stop after 5
}, 1000);

// Example 5: Nested setTimeout as interval alternative
let i=0;
function loop(){
    console.log("Nested timeout:", i);
    i++;
    if(i<5) setTimeout(loop, 500);
}
setTimeout(loop, 500);

// Example 6: Immediate execution
console.log("Before timeout");
setTimeout(()=>console.log("Inside timeout"),0);
console.log("After timeout");

// Example 7: setInterval with function reference
function printTime(){ console.log("Time:", new Date().toLocaleTimeString()); }
const clock = setInterval(printTime, 2000);
setTimeout(()=>clearInterval(clock), 10000); // stop after 10 sec

// Example 8: Multiple timeouts
setTimeout(()=>console.log("First"),1000);
setTimeout(()=>console.log("Second"),500);
setTimeout(()=>console.log("Third"),1500);

// Example 9: Passing multiple parameters
function info(name, age){ console.log(name, age); }
setTimeout(info, 1000, "Kumar", 30);

// Example 10: Nested callbacks example
setTimeout(()=>{
    console.log("Step 1");
    setTimeout(()=>{
        console.log("Step 2");
        setTimeout(()=>console.log("Step 3"),500);
    },500);
},500);
