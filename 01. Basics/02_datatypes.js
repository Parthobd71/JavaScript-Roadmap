// ==================== DATA TYPES ====================

// 1. String
let str = "Hello JavaScript";
console.log("String:", str);

// 2. Number
let num = 100;
console.log("Number:", num);

// 3. Boolean
let bool = true;
console.log("Boolean:", bool);

// 4. Null
let n = null;
console.log("Null:", n);

// 5. Undefined
let u;
console.log("Undefined:", u);

// 6. Object
let obj = {name: "Partho", age: 25};
console.log("Object:", obj);

// 7. Symbol
let sym = Symbol("id");
console.log("Symbol:", sym);

// 8. BigInt
let big = 12345678901234567890n;
console.log("BigInt:", big);

// 9. Type checking
console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bool:", typeof bool);
console.log("Type of obj:", typeof obj);
console.log("Type of sym:", typeof sym);
console.log("Type of big:", typeof big);

// 10. Dynamic type example
let dynamic = "String";
console.log("Dynamic initial type:", typeof dynamic);
dynamic = 100;
console.log("Dynamic new type:", typeof dynamic);

// Summary
/*
JS Data Types:
- Primitive: string, number, boolean, null, undefined, symbol, bigint
- Non-primitive: object (including arrays, functions)
- JS is dynamically typed
*/
