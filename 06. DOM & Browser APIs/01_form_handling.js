// =====================================
// 01 - FORM HANDLING
// =====================================
// NOTES:
// Forms can be accessed via querySelector or form ID
// Use submit event to handle form data
// Prevent default submission with e.preventDefault()

// Example 1: Basic submit event
const form = document.querySelector("#myForm");
form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("Form submitted");
});

// Example 2: Access input value
const nameInput = document.querySelector("#name");
form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("Name:", nameInput.value);
});

// Example 3: Access multiple inputs
form.addEventListener("submit", e=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    console.log("Name:", nameInput.value, "Email:", email);
});

// Example 4: Reset form
form.addEventListener("submit", e=>{
    e.preventDefault();
    form.reset();
    console.log("Form reset");
});

// Example 5: Validation example
form.addEventListener("submit", e=>{
    e.preventDefault();
    if(nameInput.value.trim()==="") alert("Name required!");
});

// Example 6: Change event on input
nameInput.addEventListener("change", e=>{
    console.log("Name changed:", e.target.value);
});

// Example 7: Input event (real-time)
nameInput.addEventListener("input", e=>{
    console.log("Typing:", e.target.value);
});

// Example 8: Prevent multiple submissions
let submitting = false;
form.addEventListener("submit", e=>{
    e.preventDefault();
    if(submitting) return;
    submitting = true;
    console.log("Processing form...");
    setTimeout(()=>submitting=false, 1000);
});

// Example 9: Using FormData
form.addEventListener("submit", e=>{
    e.preventDefault();
    const formData = new FormData(form);
    for(let [key,value] of formData.entries()){
        console.log(key,value);
    }
});

// Example 10: Sending form data via fetch
form.addEventListener("submit", async e=>{
    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    console.log("Form data object:", obj);
});
