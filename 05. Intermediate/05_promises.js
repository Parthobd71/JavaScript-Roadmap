// =====================================
// 05 - PROMISES
// =====================================
// NOTES:
// Promise represents future completion/failure of async task
// States: pending -> fulfilled/resolved -> rejected

// Example 1: Basic Promise
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Done!"),1000);
});
p1.then(result=>console.log(result));

// Example 2: Promise with reject
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Error!"),1000);
});
p2.catch(err=>console.log(err));

// Example 3: then & catch chaining
const p3 = new Promise((res,rej)=>{
    setTimeout(()=>res(5),500);
});
p3.then(n=>n*2)
  .then(n=>console.log("Doubled:", n))
  .catch(err=>console.log(err));

// Example 4: Promise.resolve
Promise.resolve("Instant value").then(v=>console.log(v));

// Example 5: Promise.reject
Promise.reject("Immediate error").catch(e=>console.log(e));

// Example 6: Multiple promises - all
const p4 = Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]);
p4.then(results=>console.log("All results:", results));

// Example 7: Multiple promises - race
Promise.race([
    new Promise(res=>setTimeout(()=>res("First"),1000)),
    new Promise(res=>setTimeout(()=>res("Second"),500))
]).then(winner=>console.log("Winner:", winner));

// Example 8: Async operation simulation
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Fetched data"),1500);
    });
}
fetchData().then(data=>console.log(data));

// Example 9: Error handling
function maybeError(){
    return new Promise((res,rej)=>{
        if(Math.random()>0.5) res("Success");
        else rej("Failure");
    });
}
maybeError().then(v=>console.log(v)).catch(e=>console.log(e));

// Example 10: Promise chain
new Promise(res=>res(2))
.then(n=>n*2)
.then(n=>n+1)
.then(console.log);
