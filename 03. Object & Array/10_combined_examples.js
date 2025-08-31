// =====================================
// 10 - COMBINED EXAMPLES (OBJECTS + ARRAYS)
// =====================================

// Example 1: Array of objects, map ages
const users = [
    {name:"Partho", age:25},
    {name:"Kumar", age:30},
    {name:"Monir", age:20}
];
const ages = users.map(u => u.age);
console.log("Ages:", ages);

// Example 2: Filter adults
const adults = users.filter(u=>u.age>=25);
console.log("Adults:", adults);

// Example 3: Reduce total age
const totalAge = users.reduce((acc,u)=>acc+u.age,0);
console.log("Total age:", totalAge);

// Example 4: Find specific user
const monir = users.find(u=>u.name==="Monir");
console.log("Found user:", monir);

// Example 5: Check if all adults
const allAdults = users.every(u=>u.age>=18);
console.log("All adults?", allAdults);

// Example 6: Check if some young
const someYoung = users.some(u=>u.age<25);
console.log("Some young?", someYoung);

// Example 7: Sort users by name
const sortedByName = [...users].sort((a,b)=>a.name.localeCompare(b.name));
console.log("Sorted by name:", sortedByName);

// Example 8: Nested objects array
const classes = [
    {name:"Class A", students:[{name:"Partho"},{name:"Kumar"}]},
    {name:"Class B", students:[{name:"Monir"}]}
];
console.log("First student of Class A:", classes[0].students[0].name);

// Example 9: Map nested arrays
const studentNames = classes.map(c=>c.students.map(s=>s.name));
console.log("Student names:", studentNames);

// Example 10: Combined methods
const totalAgeOfAdults = users
    .filter(u=>u.age>=25)
    .map(u=>u.age)
    .reduce((acc,n)=>acc+n,0);
console.log("Total age of adults:", totalAgeOfAdults);
