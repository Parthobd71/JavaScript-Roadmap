// =====================================
// 03 - CLOSURES
// =====================================
// Function + Lexical environment = closure
// Enables private variables and state preservation

// Example 1: Simple closure
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); counter(); counter();

// Example 2: Closure with parameter
function multiplier(factor){
    return function(num){ return num*factor; };
}
const triple = multiplier(3);
console.log(triple(5));

// Example 3: Private variable
function secretHolder(){
    let secret = "my secret";
    return { getSecret: ()=>secret, setSecret:(s)=>secret=s };
}
const sh = secretHolder();
console.log(sh.getSecret());
sh.setSecret("new secret");
console.log(sh.getSecret());

// Example 4: Counter object with closures
function createCounter(){
    let count = 0;
    return { increment:()=>++count, decrement:()=>--count, value:()=>count };
}
const c = createCounter();
c.increment(); c.increment();
console.log("Counter value:", c.value());
c.decrement();
console.log("Counter value:", c.value());

// Example 5: Closure with loop
for(let i=0;i<3;i++){
    setTimeout(()=>console.log("Loop i:", i), 100);
}

// Example 6: Currying
function add(a){ return function(b){ return a+b; }; }
console.log("Curried add:", add(5)(10));

// Example 7: Closure in event
function attachButton(){
    let count=0;
    const btn = document.querySelector("#btn");
    btn.addEventListener("click",()=>{ count++; console.log(count); });
}
attachButton();

// Example 8: Closure with array
function makeArray(){
    let arr=[];
    return function(value){ arr.push(value); return arr; };
}
const arrFunc = makeArray();
console.log(arrFunc(1));
console.log(arrFunc(2));

// Example 9: Multiple closures
function outer1(){ let x=10; return function(){ console.log(x); }; }
function outer2(){ let y=20; return function(){ console.log(y); }; }
outer1()(); outer2()();

// Example 10: Module pattern
const Module = (function(){
    let privateVar = 0;
    return { increment: ()=>++privateVar, value:()=>privateVar };
})();
Module.increment(); Module.increment();
console.log("Module value:", Module.value());
