// =====================================
// 04 - OPTIONAL CHAINING (ES6+)
// =====================================
// NOTES:
// ?. -> allows safe access to nested properties
// Returns undefined instead of error if property doesn't exist

// Example 1: Simple optional chaining
const user = {name:"Partho"};
console.log(user?.name); // Partho
console.log(user?.age);  // undefined

// Example 2: Nested optional chaining
const obj = {a:{b:{c:10}}};
console.log(obj?.a?.b?.c); // 10
console.log(obj?.x?.y?.z); // undefined

// Example 3: Array optional chaining
const arr = [1,2,3];
console.log(arr?.[1]); // 2
console.log(arr?.[5]); // undefined

// Example 4: Function optional chaining
const func = null;
console.log(func?.()); // undefined

// Example 5: Optional chaining with method
const user2 = {name:"Kumar", greet(){ return "Hi"; }};
console.log(user2.greet?.()); // Hi

// Example 6: Optional chaining with array of objects
const users = [{name:"Partho"},{name:"Kumar"}];
console.log(users?.[1]?.name); // Kumar

// Example 7: Safe nested property
const settings = {theme:{dark:true}};
console.log(settings?.theme?.dark); // true
console.log(settings?.layout?.grid); // undefined

// Example 8: Optional chaining with function returning object
function getUser(){ return {name:"Monir"}; }
console.log(getUser()?.name); // Monir

// Example 9: Optional chaining in real-world object
const response = {data:{users:[{id:1,name:"Partho"}]}};
console.log(response?.data?.users?.[0]?.name); // Partho

// Example 10: Combine with nullish coalescing
console.log(response?.data?.info ?? "No info"); // No info
