// =====================================
// 01 - NODE.JS BASICS
// =====================================
// NOTES:
// Node.js = JS runtime for backend
// npm = package manager
// Can read/write files, create servers, and more

// Example 1: Print to console
console.log("Hello from Node.js!");

// Example 2: Variables & functions
const name = "Partho";
function greet(n){ return `Hello, ${n}`; }
console.log(greet(name));

// Example 3: Global objects
console.log(__dirname); // current directory
console.log(__filename); // current file

// Example 4: Module import/export
// File: math.js -> export function add(a,b){ return a+b; }
// File: main.js -> const {add} = require("./math"); console.log(add(2,3));

// Example 5: Reading file (fs module)
const fs = require("fs");
fs.readFile("example.txt","utf8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
});

// Example 6: Writing file
fs.writeFile("output.txt","Hello Node.js",(err)=>{
    if(err) console.error(err);
    else console.log("File written successfully");
});

// Example 7: Append file
fs.appendFile("output.txt","\nAppended text",(err)=>{
    if(err) console.error(err);
    else console.log("Text appended");
});

// Example 8: Delete file
fs.unlink("output.txt",(err)=>{
    if(err) console.error(err);
    else console.log("File deleted");
});

// Example 9: Reading directory
fs.readdir("./",(err,files)=>{
    if(err) console.error(err);
    else console.log("Files:",files);
});

// Example 10: Simple HTTP server
const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello Node.js Server");
});
server.listen(3000,()=>console.log("Server running at http://localhost:3000"));
