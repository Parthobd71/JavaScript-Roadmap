// =====================================
// 02 - MODIFY HTML CONTENT & STYLES
// =====================================

// Example 1: Change text content
const heading = document.querySelector("#main-heading");
heading.textContent = "Updated Heading!";
console.log(heading.textContent);

// Example 2: Change innerHTML
const container = document.querySelector("#container");
container.innerHTML = "<p>New paragraph inside container</p>";

// Example 3: Change styles inline
heading.style.color = "red";
heading.style.fontSize = "30px";

// Example 4: Add multiple styles
Object.assign(heading.style, { backgroundColor: "yellow", padding: "10px" });

// Example 5: Toggle visibility
heading.style.display = "none"; // hide
heading.style.display = "block"; // show

// Example 6: Change class
heading.className = "highlighted";

// Example 7: Add class
heading.classList.add("active");

// Example 8: Remove class
heading.classList.remove("active");

// Example 9: Toggle class
heading.classList.toggle("active");

// Example 10: Read current style
console.log("Heading color:", getComputedStyle(heading).color);
