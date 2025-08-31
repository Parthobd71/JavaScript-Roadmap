// =====================================
// 03 - GEOLOCATION API
// =====================================
// NOTES:
// navigator.geolocation.getCurrentPosition(success, error, options)
// Provides latitude and longitude of user

// Example 1: Get current position
navigator.geolocation.getCurrentPosition(pos=>{
    console.log("Latitude:", pos.coords.latitude);
    console.log("Longitude:", pos.coords.longitude);
});

// Example 2: Error handling
navigator.geolocation.getCurrentPosition(
    pos => console.log(pos.coords),
    err => console.log("Error code:", err.code, "Message:", err.message)
);

// Example 3: Destructuring coordinates
navigator.geolocation.getCurrentPosition(({coords})=>{
    console.log(coords.latitude, coords.longitude);
});

// Example 4: Watch position (real-time)
const watchId = navigator.geolocation.watchPosition(({coords})=>{
    console.log("Real-time:", coords.latitude, coords.longitude);
});

// Example 5: Stop watching
navigator.geolocation.clearWatch(watchId);

// Example 6: Using options
navigator.geolocation.getCurrentPosition(
    ({coords})=>console.log(coords.latitude, coords.longitude),
    err=>console.log(err),
    {enableHighAccuracy:true, timeout:5000, maximumAge:0}
);

// Example 7: Conditional check
if("geolocation" in navigator){
    console.log("Geolocation available");
}else{
    console.log("Not supported");
}

// Example 8: Display on HTML element
navigator.geolocation.getCurrentPosition(({coords})=>{
    document.querySelector("#location").textContent =
        `Lat: ${coords.latitude}, Lon: ${coords.longitude}`;
});

// Example 9: Async wrapper
function getPosition(){
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
getPosition().then(pos=>console.log("Async Lat:", pos.coords.latitude));

// Example 10: Real-world usage
async function showPosition(){
    try{
        const pos = await getPosition();
        console.log(`User location: ${pos.coords.latitude}, ${pos.coords.longitude}`);
    }catch(err){
        console.log("Cannot get location:", err.message);
    }
}
showPosition();
