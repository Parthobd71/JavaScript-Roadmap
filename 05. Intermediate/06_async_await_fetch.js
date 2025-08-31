// =====================================
// 06 - ASYNC / AWAIT & FETCH API
// =====================================
// NOTES:
// async -> function returns a promise
// await -> pause execution until promise resolves
// try...catch -> handle errors in async functions
// Fetch API -> make HTTP requests (GET/POST)

// Example 1: Basic async function
async function greet(){
    return "Hello Async";
}
greet().then(msg=>console.log(msg));

// Example 2: Async with await
async function asyncGreet(){
    const message = await Promise.resolve("Awaited message");
    console.log(message);
}
asyncGreet();

// Example 3: Async with setTimeout simulation
function delay(ms){ return new Promise(res=>setTimeout(res, ms)); }
async function delayedLog(){
    console.log("Start");
    await delay(1000);
    console.log("After 1 second");
}
delayedLog();

// Example 4: Try...catch with async
async function mayFail(){
    try{
        const result = await Promise.reject("Something went wrong");
        console.log(result);
    }catch(err){
        console.log("Caught error:", err);
    }
}
mayFail();

// Example 5: Fetch API GET request
// NOTE: Using JSONPlaceholder API for demo
async function fetchUsers(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("Users:", data);
    }catch(err){
        console.log("Fetch error:", err);
    }
}
fetchUsers();

// Example 6: Fetch API POST request
async function createUser(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method:"POST",
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify({name:"Partho", email:"partho@test.com"})
        });
        const data = await res.json();
        console.log("Created user:", data);
    }catch(err){
        console.log("POST error:", err);
    }
}
createUser();

// Example 7: Sequential async operations
async function sequentialTasks(){
    const a = await Promise.resolve(5);
    const b = await Promise.resolve(a*2);
    console.log("Sequential result:", b);
}
sequentialTasks();

// Example 8: Parallel async operations
async function parallelTasks(){
    const [a,b] = await Promise.all([Promise.resolve(3), Promise.resolve(4)]);
    console.log("Parallel results:", a,b);
}
parallelTasks();

// Example 9: Async function returning value
async function getNumber(){
    return 42; // automatically wrapped in Promise
}
getNumber().then(n=>console.log("Returned:", n));

// Example 10: Error propagation
async function propagateError(){
    const result = await Promise.reject("Propagation error").catch(e=>"Handled inside");
    console.log(result);
}
propagateError();
