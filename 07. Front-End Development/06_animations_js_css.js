// =====================================
// 06 - ANIMATIONS WITH JS & CSS
// =====================================
// NOTES:
// CSS animations via class toggle
// JS can trigger animations, handle timing

// Example 1: Basic CSS animation toggle
const box = document.createElement("div");
box.style.width="100px"; box.style.height="100px"; box.style.background="red";
document.body.appendChild(box);
box.addEventListener("click", ()=>box.classList.toggle("animate"));

// Example 2: Add animation via JS
box.style.transition="all 0.5s";
box.style.transform="translateX(100px)";

// Example 3: Animation on scroll using Intersection Observer
const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("fade-in");
    });
});
obs.observe(box);

// Example 4: Sequential animation with setTimeout
setTimeout(()=>box.style.transform="translateX(200px)", 500);
setTimeout(()=>box.style.background="blue", 1000);

// Example 5: Looping animation
let pos=0;
setInterval(()=>{
    pos=(pos+10)%300;
    box.style.transform=`translateX(${pos}px)`;
},200);

// Example 6: Keyframes via JS
box.style.animation="move 2s infinite";
const style = document.createElement("style");
style.textContent=`@keyframes move {0%{transform:translateX(0);}50%{transform:translateX(150px);}100%{transform:translateX(0);}}`;
document.head.appendChild(style);

// Example 7: Animation end event
box.addEventListener("animationend", ()=>console.log("Animation finished"));

// Example 8: Trigger class with delay
setTimeout(()=>box.classList.add("animate-delay"), 500);

// Example 9: Remove animation class after finish
box.addEventListener("animationend", ()=>box.classList.remove("animate-delay"));

// Example 10: Combined JS + CSS variables
box.style.setProperty("--moveX","200px");
