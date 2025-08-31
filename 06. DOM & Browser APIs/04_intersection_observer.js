// =====================================
// 04 - INTERSECTION OBSERVER (SCROLL ANIMATIONS)
// =====================================
// NOTES:
// Observe when element enters/leaves viewport
// Used for lazy loading, animations, or triggering events

// Example 1: Basic observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry.target.id, entry.isIntersecting);
    });
});
document.querySelectorAll(".box").forEach(box=>observer.observe(box));

// Example 2: Threshold example
const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.id,"fully visible");
        }
    });
},{threshold:1.0});
document.querySelectorAll(".full-box").forEach(box=>obs.observe(box));

// Example 3: Root margin
const obsMargin = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>console.log(entry.target.id, entry.isIntersecting));
},{rootMargin:"-50px 0px 0px 0px"});
document.querySelectorAll(".margin-box").forEach(box=>obsMargin.observe(box));

// Example 4: Animate on scroll
const animated = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("animate");
    });
});
document.querySelectorAll(".animate-box").forEach(el=>animated.observe(el));

// Example 5: Unobserve after animation
const observerOnce = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
        }
    });
});
document.querySelectorAll(".once-box").forEach(el=>observerOnce.observe(el));

// Example 6: Observe dynamically added elements
const newDiv = document.createElement("div");
newDiv.classList.add("box");
document.body.appendChild(newDiv);
observer.observe(newDiv);

// Example 7: Disconnect observer
setTimeout(()=>observer.disconnect(), 10000);

// Example 8: Multiple thresholds
const obsMulti = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry.target.id, entry.intersectionRatio);
    });
},{threshold:[0,0.25,0.5,0.75,1]});
document.querySelectorAll(".multi-box").forEach(el=>obsMulti.observe(el));

// Example 9: Using root
const obsRoot = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>console.log(entry.isIntersecting));
},{root:document.querySelector("#scroll-container")});
document.querySelectorAll(".child").forEach(el=>obsRoot.observe(el));

// Example 10: Real-world lazy load image
const lazyImages = document.querySelectorAll("img[data-src]");
const lazyObserver = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src;
            obs.unobserve(entry.target);
        }
    });
});
lazyImages.forEach(img=>lazyObserver.observe(img));
