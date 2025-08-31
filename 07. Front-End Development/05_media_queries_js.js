// =====================================
// 05 - MEDIA QUERIES WITH JS
// =====================================
// NOTES:
// Use window.matchMedia to detect screen size
// Can dynamically apply JS behavior based on media

// Example 1: Basic media query
const mq = window.matchMedia("(max-width: 600px)");
if(mq.matches) console.log("Screen is small");

// Example 2: Add listener
mq.addEventListener("change", e=>{
    if(e.matches) console.log("Now small screen");
    else console.log("Screen large");
});

// Example 3: Apply style dynamically
if(mq.matches) document.body.style.background="lightblue";

// Example 4: Inline function
function screenCheck(e){ console.log("Change:", e.matches); }
mq.addEventListener("change", screenCheck);

// Example 5: Dynamic element based on screen
const div = document.createElement("div");
document.body.appendChild(div);
if(mq.matches) div.textContent="Small screen content";

// Example 6: Remove listener
mq.removeEventListener("change", screenCheck);

// Example 7: Multiple media queries
const mq2 = window.matchMedia("(orientation: portrait)");
mq2.addEventListener("change", e=>console.log("Orientation changed"));

// Example 8: Conditional JS
if(window.innerWidth<500) alert("Mobile device");

// Example 9: Resize event alternative
window.addEventListener("resize", ()=>{
    if(window.innerWidth<600) console.log("Resize detected, small screen");
});

// Example 10: Combine with dynamic classes
if(mq.matches) div.classList.add("mobile-style");
else div.classList.remove("mobile-style");
