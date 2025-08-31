// =====================================
// 04 - AUTHENTICATION & SECURITY
// =====================================
// NOTES:
// JWT = JSON Web Token for authentication
// bcrypt = password hashing
// Helmet = security headers
// CORS = cross-origin requests

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
const PORT = 3000;

// Example secret key for JWT
const SECRET_KEY = "mysecretkey";

// Example 1: Hash a password
async function hashPassword(password){
    const hashed = await bcrypt.hash(password,10);
    console.log("Hashed password:", hashed);
    return hashed;
}
hashPassword("myPassword123");

// Example 2: Compare password
async function comparePassword(password, hashed){
    const match = await bcrypt.compare(password, hashed);
    console.log("Password match:", match);
}
comparePassword("myPassword123","$2b$10$..."); // use actual hash

// Example 3: Create JWT token
function generateToken(user){
    const token = jwt.sign({id:user.id, name:user.name}, SECRET_KEY, {expiresIn:"1h"});
    console.log("JWT token:", token);
    return token;
}
generateToken({id:1, name:"Partho"});

// Example 4: Verify JWT token
function verifyToken(token){
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Decoded token:", decoded);
    }catch(err){ console.error("Invalid token"); }
}

// Example 5: Protected route middleware
function authMiddleware(req,res,next){
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).send("Access denied");
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }catch(err){ res.status(400).send("Invalid token"); }
}

// Example 6: Registration route
app.post("/register", async (req,res)=>{
    const {username,password} = req.body;
    const hashed = await bcrypt.hash(password,10);
    // Save user in DB (omitted)
    res.send({username, hashed});
});

// Example 7: Login route
app.post("/login", async (req,res)=>{
    const {username,password} = req.body;
    // Fetch user from DB (omitted)
    const hashed = "$2b$10$..."; // fetch from DB
    const match = await bcrypt.compare(password,hashed);
    if(!match) return res.status(400).send("Invalid credentials");
    const token = jwt.sign({username},SECRET_KEY,{expiresIn:"1h"});
    res.send({token});
});

// Example 8: Apply auth middleware
app.get("/dashboard", authMiddleware, (req,res)=>{
    res.send(`Welcome ${req.user.name}`);
});

// Example 9: CORS usage
// app.use(cors({ origin: "http://localhost:5173" }));

// Example 10: Helmet for security
// Adds headers like X-DNS-Prefetch-Control, X-Frame-Options, etc.
app.use(helmet());

app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}`));
