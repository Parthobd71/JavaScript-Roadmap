// =====================================
// 02 - EXPRESS.JS BASICS
// =====================================
// NOTES:
// Express = popular Node.js framework for backend
// Easy routing, middleware, and JSON handling

const express = require("express");
const app = express();
const PORT = 3000;

// Example 1: Basic route
app.get("/",(req,res)=>{
    res.send("Hello from Express!");
});

// Example 2: JSON response
app.get("/json",(req,res)=>{
    res.json({message:"Hello JSON"});
});

// Example 3: Route with parameter
app.get("/user/:id",(req,res)=>{
    res.send(`User ID: ${req.params.id}`);
});

// Example 4: POST route with body parsing
app.use(express.json());
app.post("/add",(req,res)=>{
    const {name} = req.body;
    res.send(`Added user: ${name}`);
});

// Example 5: Middleware example
app.use((req,res,next)=>{
    console.log(`Request URL: ${req.url}`);
    next();
});

// Example 6: Serving static files
app.use(express.static("public"));

// Example 7: Handling 404
app.use((req,res)=>{ res.status(404).send("Page Not Found"); });

// Example 8: Multiple methods
app.route("/item")
.get((req,res)=>res.send("Get item"))
.post((req,res)=>res.send("Create item"))
.put((req,res)=>res.send("Update item"));

// Example 9: Query parameters
app.get("/search",(req,res)=>{
    const q = req.query.q;
    res.send(`Search query: ${q}`);
});

// Example 10: Start server
app.listen(PORT,()=>console.log(`Express server running at http://localhost:${PORT}`));
