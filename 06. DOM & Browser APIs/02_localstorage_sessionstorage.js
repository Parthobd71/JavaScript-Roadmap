// =====================================
// 02 - LOCALSTORAGE & SESSIONSTORAGE
// =====================================
// NOTES:
// localStorage -> persists even after browser close
// sessionStorage -> persists until tab is closed
// Methods: setItem(key,value), getItem(key), removeItem(key), clear()

// Example 1: Save to localStorage
localStorage.setItem("name", "Partho");

// Example 2: Read from localStorage
console.log(localStorage.getItem("name"));

// Example 3: Remove from localStorage
localStorage.removeItem("name");

// Example 4: Save object in localStorage
const user = {name:"Kumar", age:30};
localStorage.setItem("user", JSON.stringify(user));

// Example 5: Read object from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);

// Example 6: Clear localStorage
// localStorage.clear();

// Example 7: sessionStorage save
sessionStorage.setItem("sessionName","Partho");

// Example 8: sessionStorage read
console.log(sessionStorage.getItem("sessionName"));

// Example 9: sessionStorage remove
sessionStorage.removeItem("sessionName");

// Example 10: Practical usage - counter
let counter = localStorage.getItem("counter") || 0;
counter++;
localStorage.setItem("counter", counter);
console.log("Page visits:", counter);
