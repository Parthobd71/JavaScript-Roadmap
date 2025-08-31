// =====================================
// 01 - DOM SELECTORS
// =====================================
// Selecting elements from HTML to manipulate them

// Example 1: getElementById
const heading = document.getElementById("main-heading");
console.log(heading);

// Example 2: querySelector (first match)
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// Example 3: querySelector with class
const special = document.querySelector(".special");
console.log(special);

// Example 4: querySelectorAll (NodeList)
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => console.log(p.textContent));

// Example 5: getElementsByClassName (HTMLCollection)
const boxes = document.getElementsByClassName("box");
console.log(boxes[0]);

// Example 6: getElementsByTagName
const listItems = document.getElementsByTagName("li");
console.log(listItems[0]);

// Example 7: querySelector with ID
const mainDiv = document.querySelector("#container");
console.log(mainDiv);

// Example 8: nested querySelector
const nestedSpan = document.querySelector("#container span");
console.log(nestedSpan);

// Example 9: firstElementChild
const firstChild = mainDiv.firstElementChild;
console.log(firstChild);

// Example 10: lastElementChild
const lastChild = mainDiv.lastElementChild;
console.log(lastChild);
