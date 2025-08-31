// =====================================
// 02 - WEBSOCKETS
// =====================================
// NOTES:
// WebSockets = real-time communication
// Socket.IO simplifies implementation

const io = require("socket.io")(3000);

// Example 1: Server connection
io.on("connection", socket=>{
    console.log("New client connected");

    // Example 2: Send message
    socket.emit("message","Welcome!");

    // Example 3: Receive message
    socket.on("sendMessage", msg=>console.log("Received:", msg));

    // Example 4: Broadcast message
    socket.broadcast.emit("message","New user joined");

    // Example 5: Disconnect
    socket.on("disconnect", ()=>console.log("Client disconnected"));
});
