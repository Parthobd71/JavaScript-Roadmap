// ==================== LOOPS ====================

// 1. for loop
for(let i=0; i<5; i++){
    console.log("for loop iteration:", i);
}

// 2. for loop with break
for(let i=0; i<10; i++){
    if(i===3) break;
    console.log("for loop with break:", i);
}

// 3. for loop with continue
for(let i=0; i<5; i++){
    if(i===2) continue;
    console.log("for loop with continue:", i);
}

// 4. while loop
let j = 0;
while(j < 3){
    console.log("while loop:", j);
    j++;
}

// 5. do-while loop
let k = 0;
do{
    console.log("do-while loop:", k);
    k++;
}while(k<3);

// 6. for-of loop (array iteration)
let fruits = ["apple","banana","cherry"];
for(let fruit of fruits){
    console.log("for-of:", fruit);
}

// 7. for-in loop (object properties)
let person = {name:"Partho", age:25};
for(let key in person){
    console.log(`Key: ${key}, Value: ${person[key]}`);
}

// 8. Nested loops
for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`Nested loop i=${i}, j=${j}`);
    }
}

// 9. Array iteration with forEach
fruits.forEach((fruit,index)=>{
    console.log(`forEach index ${index}:`, fruit);
});

// 10. Summary
/*
Loops in JS:
- for: standard loop
- while: condition first
- do-while: executes at least once
- for-of: iterate arrays or iterable objects
- for-in: iterate object keys
- break/continue to control flow
- Nested loops possible
- forEach for array iteration with callback
*/
