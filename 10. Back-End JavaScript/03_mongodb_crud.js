// =====================================
// 03 - MONGODB CRUD WITH MONGOOSE
// =====================================
// NOTES:
// MongoDB = NoSQL database
// Mongoose = ODM to interact with MongoDB

const mongoose = require("mongoose");

// Example 1: Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/testdb")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error(err));

// Example 2: Define schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// Example 3: Create model
const User = mongoose.model("User",userSchema);

// Example 4: Create document
async function createUser(){
    const user = new User({name:"Partho", age:25, email:"partho@example.com"});
    await user.save();
    console.log("User created");
}

// Example 5: Read documents
async function getUsers(){
    const users = await User.find();
    console.log(users);
}

// Example 6: Update document
async function updateUser(id){
    await User.findByIdAndUpdate(id,{age:26});
    console.log("User updated");
}

// Example 7: Delete document
async function deleteUser(id){
    await User.findByIdAndDelete(id);
    console.log("User deleted");
}

// Example 8: Find with condition
async function findUsers(){
    const users = await User.find({age:{$gt:20}});
    console.log(users);
}

// Example 9: Sort documents
async function sortedUsers(){
    const users = await User.find().sort({age:1});
    console.log(users);
}

// Example 10: Limit documents
async function limitedUsers(){
    const users = await User.find().limit(2);
    console.log(users);
}
