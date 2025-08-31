// =====================================
// 04 - EVENT LISTENERS
// =====================================

// Example 1: Click event
const btn = document.querySelector("#my-btn");
btn.addEventListener("click", () => console.log("Button clicked!"));

// Example 2: Mouseover event
btn.addEventListener("mouseover", () => console.log("Mouse over button"));

// Example 3: Mouseout event
btn.addEventListener("mouseout", () => console.log("Mouse left button"));

// Example 4: Input event
const input = document.querySelector("#my-input");
input.addEventListener("input", e => console.log("Input value:", e.target.value));

// Example 5: Change event (select)
const select = document.querySelector("#my-select");
select.addEventListener("change", e => console.log("Selected:", e.target.value));

// Example 6: Keydown event
input.addEventListener("keydown", e => console.log("Key pressed:", e.key));

// Example 7: Keyup event
input.addEventListener("keyup", e => console.log("Key released:", e.key));

// Example 8: Form submit
const form = document.querySelector("#my-form");
form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("Form submitted!");
});

// Example 9: Event delegation
document.querySelector("#list").addEventListener("click", e=>{
    if(e.target.tagName==="LI"){
        console.log("Clicked list item:", e.target.textContent);
    }
});

// Example 10: Remove event listener
function handleClick(){ console.log("Temporary click"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
