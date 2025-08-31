// =====================================
// 01 - OBJECT CREATION
// =====================================
// Objects store key-value pairs, useful for representing real-world entities

// Example 1: Object literal
const user = {
    name: "Partho",
    age: 25,
    isAdmin: true
};
console.log(user);

// Example 2: Accessing object
console.log(user.name, user.age, user.isAdmin);

// Example 3: Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
console.log(car);

// Example 4: Nested object
const person = {
    name: "Kumar",
    address: {
        city: "Dhaka",
        zip: 1205
    }
};
console.log(person.address.city);

// Example 5: Object with array property
const student = {
    name: "Monir",
    subjects: ["Math", "Physics"]
};
console.log(student.subjects[1]);

// Example 6: Dynamic property
let key = "email";
user[key] = "partho@gmail.com";
console.log(user);

// Example 7: Object.create
const proto = { greet: function(){ console.log("Hello!"); } };
const newObj = Object.create(proto);
newObj.greet();

// Example 8: Object.assign
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);

// Example 9: Shorthand property
let x = 10, y = 20;
const point = { x, y };
console.log(point);

// Example 10: Freezing object
const frozen = Object.freeze({name:"Immutable"});
// frozen.name = "Change"; // ignored
console.log(frozen);
