// ==================== TO-DO LIST MANAGER ====================
// Purpose: Practice functions for CRUD operations (Create, Read, Update, Delete)

// Step 1: Store tasks in an array
let tasks = [];

// Step 2: Function to add task
function addTask(task) {
    tasks.push(task);
    console.log("✅ Task added: " + task);
}

// Step 3: Function to list all tasks
function listTasks() {
    console.log("📋 Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log((i+1) + ". " + tasks[i]);
    }
}

// Step 4: Function to remove a task
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        console.log("❌ Task removed: " + tasks[index]);
        tasks.splice(index, 1); // remove 1 item at position index
    } else {
        console.log("⚠️ Invalid index!");
    }
}

// Step 5: Test the functions
addTask("Learn JavaScript functions");
addTask("Build a project");
listTasks();

removeTask(0); // remove first task
listTasks();

// ✅ Functions keep code modular and organized
