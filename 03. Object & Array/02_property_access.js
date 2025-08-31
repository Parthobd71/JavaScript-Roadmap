// =====================================
// 02 - PROPERTY ACCESS (DOT vs BRACKET)
// =====================================

// Example 1: Dot notation
const user = { name: "Partho", age: 25 };
console.log(user.name);

// Example 2: Bracket notation
console.log(user["age"]);

// Example 3: Dynamic key with bracket
const key = "name";
console.log(user[key]);

// Example 4: Nested property access
const obj = { a: { b: { c: 10 } } };
console.log(obj.a.b.c);

// Example 5: Add new property
user.gender = "Male";
console.log(user);

// Example 6: Delete property
delete user.age;
console.log(user);

// Example 7: Check property existence
console.log("name" in user);
console.log(user.hasOwnProperty("gender"));

// Example 8: Looping keys
for (let prop in user) {
    console.log(prop, ":", user[prop]);
}

// Example 9: Access with variable keys
const propName = "gender";
console.log(user[propName]);

// Example 10: Optional chaining
const nestedObj = { a: { b: { c: 5 } } };
console.log(nestedObj?.a?.b?.c);
console.log(nestedObj?.x?.y?.z); // undefined safely
