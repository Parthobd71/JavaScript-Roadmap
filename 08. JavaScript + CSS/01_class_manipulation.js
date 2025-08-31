// =====================================
// 01 - CLASS MANIPULATION
// =====================================
// NOTES:
// classList property allows add, remove, toggle, contains
// Useful to dynamically change styles via JS

// Example 1: Add class
const box1 = document.createElement("div");
box1.textContent="Box 1";
box1.style.width="100px"; box1.style.height="100px"; box1.style.background="red";
document.body.appendChild(box1);
box1.classList.add("highlight");

// Example 2: Remove class
setTimeout(()=>box1.classList.remove("highlight"), 2000);

// Example 3: Toggle class on click
box1.addEventListener("click", ()=>box1.classList.toggle("highlight"));

// Example 4: Check if class exists
console.log(box1.classList.contains("highlight")); // true/false

// Example 5: Add multiple classes
box1.classList.add("rounded","shadow");

// Example 6: Remove multiple classes
box1.classList.remove("rounded","shadow");

// Example 7: Replace class
box1.classList.replace("highlight","active");

// Example 8: Dynamic class from input
const input = document.createElement("input");
input.placeholder="Enter class name";
const btn = document.createElement("button");
btn.textContent="Add Class";
document.body.append(input, btn);

btn.addEventListener("click", ()=>{
    const val = input.value.trim();
    if(val) box1.classList.add(val);
});

// Example 9: Iterate classes
box1.classList.forEach(cls=>console.log("Class:", cls));

// Example 10: Add/remove class with condition
const condition = true;
if(condition) box1.classList.add("success");
else box1.classList.add("error");
