// =====================================
// 02 - TRIGGERING ANIMATIONS PROGRAMMATICALLY
// =====================================
// NOTES:
// Use JS to add/remove animation classes or manipulate CSS properties
// Can combine with setTimeout, events, or Intersection Observer

// Example 1: Add class to trigger CSS animation
const animBox = document.createElement("div");
animBox.style.width="100px"; animBox.style.height="100px"; animBox.style.background="green";
animBox.classList.add("animate-box");
document.body.appendChild(animBox);

// Example 2: Toggle animation on click
animBox.addEventListener("click", ()=>{
    animBox.classList.toggle("animate");
});

// Example 3: Remove animation after finish
animBox.addEventListener("animationend", ()=>animBox.classList.remove("animate"));

// Example 4: Animate via JS property
animBox.style.transition="transform 0.5s";
animBox.style.transform="translateX(100px)";

// Example 5: Sequential animation with delay
setTimeout(()=>animBox.style.transform="translateX(200px)", 500);
setTimeout(()=>animBox.style.background="blue", 1000);

// Example 6: Loop animation
let pos=0;
setInterval(()=>{
    pos=(pos+10)%300;
    animBox.style.transform=`translateX(${pos}px)`;
},200);

// Example 7: Animate opacity
animBox.style.opacity=0;
setTimeout(()=>animBox.style.opacity=1, 500);

// Example 8: Keyframes animation via JS
const style = document.createElement("style");
style.textContent=`@keyframes move {0%{transform:translateX(0);}50%{transform:translateX(150px);}100%{transform:translateX(0);}}`;
document.head.appendChild(style);
animBox.style.animation="move 2s infinite";

// Example 9: Trigger animation on scroll using Intersection Observer
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("fade-in");
    });
});
observer.observe(animBox);

// Example 10: Remove animation after timeout
setTimeout(()=>animBox.style.animation="", 5000);
