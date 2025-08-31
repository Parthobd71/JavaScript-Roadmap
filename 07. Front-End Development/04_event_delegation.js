// =====================================
// 04 - EVENT DELEGATION
// =====================================
// NOTES:
// Attach one listener to parent element
// Handles events for current/future child elements

// Example 1: Basic delegation
const ul = document.createElement("ul");
document.body.appendChild(ul);
["One","Two","Three"].forEach(txt=>{
    const li = document.createElement("li");
    li.textContent = txt;
    ul.appendChild(li);
});
ul.addEventListener("click", e=>{
    if(e.target.tagName==="LI") console.log("Clicked:", e.target.textContent);
});

// Example 2: Add new element dynamically
const liNew = document.createElement("li");
liNew.textContent = "Four";
ul.appendChild(liNew);

// Example 3: Buttons inside list
ul.addEventListener("click", e=>{
    if(e.target.tagName==="BUTTON") console.log("Button clicked:", e.target.textContent);
});

// Example 4: Delegation for multiple types
document.body.addEventListener("click", e=>{
    if(e.target.matches(".btn-class")) console.log("Button clicked!");
});

// Example 5: Remove item using delegation
ul.addEventListener("click", e=>{
    if(e.target.tagName==="LI") e.target.remove();
});

// Example 6: Delegation with event bubbling
const container = document.createElement("div");
container.className="container";
document.body.appendChild(container);
container.addEventListener("click", e=>console.log("Container clicked", e.target));

// Example 7: Using closest()
ul.addEventListener("click", e=>{
    const li = e.target.closest("li");
    if(li) console.log("Closest li clicked:", li.textContent);
});

// Example 8: Delegation for form elements
document.body.addEventListener("input", e=>{
    if(e.target.tagName==="INPUT") console.log("Input changed:", e.target.value);
});

// Example 9: Delegation for dynamic tables
const table = document.createElement("table");
document.body.appendChild(table);
table.addEventListener("click", e=>{
    if(e.target.tagName==="TD") console.log("Cell clicked");
});

// Example 10: Stop propagation
ul.addEventListener("click", e=>{
    console.log("UL clicked");
    e.stopPropagation(); // stops parent handlers
});
