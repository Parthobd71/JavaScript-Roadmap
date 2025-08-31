// =====================================
// 03 - ADDING & REMOVING ELEMENTS
// =====================================

// Example 1: Create a new element
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div";

// Example 2: Append element to container
const container = document.querySelector("#container");
container.appendChild(newDiv);

// Example 3: Prepend element
const newPara = document.createElement("p");
newPara.textContent = "Prepended paragraph";
container.prepend(newPara);

// Example 4: Insert before another element
const anotherPara = document.createElement("p");
anotherPara.textContent = "Inserted before last";
container.insertBefore(anotherPara, container.lastElementChild);

// Example 5: Remove element
const removeDiv = document.querySelector("#remove-me");
if(removeDiv) removeDiv.remove();

// Example 6: Remove child
const child = container.querySelector("p");
if(child) container.removeChild(child);

// Example 7: Clone node
const clone = newDiv.cloneNode(true);
container.appendChild(clone);

// Example 8: Replace element
const replacePara = document.createElement("p");
replacePara.textContent = "I replaced the first paragraph";
container.replaceChild(replacePara, container.firstElementChild);

// Example 9: Adding multiple elements
["A","B","C"].forEach(letter=>{
    const li = document.createElement("li");
    li.textContent = letter;
    container.appendChild(li);
});

// Example 10: Clear container
container.innerHTML = "";
