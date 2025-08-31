// =====================================
// 02 - CAROUSELS
// =====================================
// NOTES:
// Carousel = slide show of images/content
// Can use JS to switch images automatically or via buttons

// Example 1: Basic image carousel
const images = ["img1.jpg","img2.jpg","img3.jpg"];
let index=0;
const imgEl = document.createElement("img");
imgEl.src = images[index];
document.body.appendChild(imgEl);

// Next function
function nextImg(){
    index = (index+1) % images.length;
    imgEl.src = images[index];
}

// Previous function
function prevImg(){
    index = (index-1+images.length) % images.length;
    imgEl.src = images[index];
}

// Buttons
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.addEventListener("click", nextImg);

const prevBtn = document.createElement("button");
prevBtn.textContent = "Prev";
prevBtn.addEventListener("click", prevImg);

document.body.append(prevBtn, nextBtn);

// Example 2: Auto slide every 3 seconds
setInterval(nextImg, 3000);

// Example 3: Carousel with captions
const captions = ["First","Second","Third"];
const captionEl = document.createElement("p");
captionEl.textContent = captions[index];
document.body.appendChild(captionEl);

function updateCarousel(){
    imgEl.src = images[index];
    captionEl.textContent = captions[index];
}
nextBtn.addEventListener("click", ()=>{
    nextImg();
    updateCarousel();
});
prevBtn.addEventListener("click", ()=>{
    prevImg();
    updateCarousel();
});

// Example 4: Carousel with dots navigation
const dots = [];
const dotContainer = document.createElement("div");
images.forEach((_,i)=>{
    const dot = document.createElement("span");
    dot.textContent = "•";
    dot.addEventListener("click", ()=>{
        index=i; updateCarousel();
    });
    dots.push(dot); dotContainer.appendChild(dot);
});
document.body.appendChild(dotContainer);

// Example 5: Infinite loop handled above with modulo operator
// index=(index+1)%images.length ensures infinite loop

// Example 6: Keyboard navigation
document.addEventListener("keydown", e=>{
    if(e.key==="ArrowRight") nextImg();
    if(e.key==="ArrowLeft") prevImg();
});

// Example 7: Pause on hover
imgEl.addEventListener("mouseenter", ()=>clearInterval(autoSlide));
imgEl.addEventListener("mouseleave", ()=>autoSlide=setInterval(nextImg,3000));
let autoSlide = setInterval(nextImg,3000);

// Example 8: Transition effect via CSS
imgEl.style.transition = "all 0.5s ease";

// Example 9: Dynamic image creation from API
const apiImgs = ["a.jpg","b.jpg"];
apiImgs.forEach(src=>{
    const i = document.createElement("img");
    i.src=src;
    document.body.appendChild(i);
});

// Example 10: Carousel with thumbnails
const thumbs = document.createElement("div");
images.forEach((src,i)=>{
    const t = document.createElement("img");
    t.src=src;
    t.style.width="50px";
    t.addEventListener("click", ()=>{
        index=i; updateCarousel();
    });
    thumbs.appendChild(t);
});
document.body.appendChild(thumbs);
