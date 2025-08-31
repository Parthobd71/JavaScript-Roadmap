// =====================================
// 01 - DYNAMIC LISTS
// =====================================
// NOTES:
// Dynamically create HTML elements from JS
// Useful for rendering lists from arrays or API data

// Example 1: Basic dynamic list
const fruits = ["Apple","Banana","Orange"];
const ul = document.createElement("ul");
fruits.forEach(fruit=>{
    const li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// Example 2: Dynamic list from object array
const users = [{name:"Partho"},{name:"Kumar"}];
const ulUsers = document.createElement("ul");
users.forEach(u=>{
    const li = document.createElement("li");
    li.textContent = u.name;
    ulUsers.appendChild(li);
});
document.body.appendChild(ulUsers);

// Example 3: Adding button to each list item
fruits.forEach(fruit=>{
    const li = document.createElement("li");
    li.textContent = fruit;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", ()=>li.remove());
    li.appendChild(btn);
    ul.appendChild(li);
});

// Example 4: Input to add new item
const input = document.createElement("input");
const addBtn = document.createElement("button");
addBtn.textContent = "Add";
document.body.append(input, addBtn);

addBtn.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value="";
});

// Example 5: Render from API (simulated)
const data = [{title:"Item1"},{title:"Item2"}];
const listApi = document.createElement("ul");
data.forEach(item=>{
    const li = document.createElement("li");
    li.textContent = item.title;
    listApi.appendChild(li);
});
document.body.appendChild(listApi);

// Example 6: Adding class dynamically
fruits.forEach(fruit=>{
    const li = document.createElement("li");
    li.textContent = fruit;
    li.classList.add("fruit-item");
    ul.appendChild(li);
});

// Example 7: Toggling item style
ul.addEventListener("click", e=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("highlight");
    }
});

// Example 8: Using template literal
fruits.forEach(fruit=>{
    const li = document.createElement("li");
    li.innerHTML = `<b>${fruit}</b>`;
    ul.appendChild(li);
});

// Example 9: Insert before
const liNew = document.createElement("li");
liNew.textContent = "Mango";
ul.insertBefore(liNew, ul.firstChild);

// Example 10: Remove all items
const removeAll = document.createElement("button");
removeAll.textContent = "Remove All";
removeAll.addEventListener("click", ()=>ul.innerHTML="");
document.body.appendChild(removeAll);
