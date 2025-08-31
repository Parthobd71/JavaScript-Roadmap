// =====================================
// 03 - PERFORMANCE OPTIMIZATION
// =====================================
// NOTES:
// Improve speed & efficiency

// Example 1: Debouncing
function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>func.apply(this,args), delay);
    };
}

// Example 2: Throttling
function throttle(func, limit){
    let lastFunc, lastRan;
    return function(...args){
        if(!lastRan){
            func.apply(this,args);
            lastRan = Date.now();
        }else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if((Date.now() - lastRan) >= limit){
                    func.apply(this,args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Example 3: Lazy loading images
const images = document.querySelectorAll("img[data-src]");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});
images.forEach(img=>observer.observe(img));

// Example 4: Code splitting (React)
// import("./Component").then(module => { const Comp = module.default; });

// Example 5: Memoization
const memoize = (fn) => {
    const cache = {};
    return (arg) => cache[arg] ?? (cache[arg] = fn(arg));
};
