// =====================================
// 01 - CONNECT FRONTEND & BACKEND
// =====================================
// NOTES:
// Front-End (React) -> Back-End (Express) via API calls (Fetch or Axios)

// -----------------------
// Backend (Express) Example
// -----------------------
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let users = []; // temporary DB

// GET users
app.get("/users",(req,res)=>res.json(users));

// POST user
app.post("/users",(req,res)=>{
    const {name,email} = req.body;
    users.push({id:users.length+1,name,email});
    res.json({message:"User added"});
});

app.listen(PORT,()=>console.log(`Backend running at http://localhost:${PORT}`));

// -----------------------
// Frontend (React) Example
// -----------------------
// Fetch API
async function fetchUsers(){
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    console.log(data);
}

// POST Form submission
async function addUser(name,email){
    const res = await fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name,email})
    });
    const data = await res.json();
    console.log(data);
}
