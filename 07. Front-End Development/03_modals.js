// =====================================
// 03 - MODALS (POP-UP WINDOWS)
// =====================================
// NOTES:
// Modals = popup dialogs over content
// Can show/hide via JS, often using CSS classes

// Example 1: Basic modal
const modal = document.createElement("div");
modal.id = "myModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.background = "white";
modal.style.padding = "20px";
modal.style.border = "1px solid black";
modal.textContent = "This is a modal!";
document.body.appendChild(modal);

// Example 2: Open button
const openBtn = document.createElement("button");
openBtn.textContent = "Open Modal";
openBtn.addEventListener("click", ()=>modal.style.display="block");
document.body.appendChild(openBtn);

// Example 3: Close modal on click
modal.addEventListener("click", ()=>modal.style.display="none");

// Example 4: Modal with overlay
const overlay = document.createElement("div");
overlay.style.display="none";
overlay.style.position="fixed";
overlay.style.top=0; overlay.style.left=0;
overlay.style.width="100%"; overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,0.5)";
document.body.appendChild(overlay);

openBtn.addEventListener("click", ()=>{
    overlay.style.display="block";
    modal.style.display="block";
});
overlay.addEventListener("click", ()=>{
    overlay.style.display="none";
    modal.style.display="none";
});

// Example 5: Modal with close button
const closeBtn = document.createElement("button");
closeBtn.textContent = "Close";
closeBtn.addEventListener("click", ()=>{
    modal.style.display="none";
    overlay.style.display="none";
});
modal.appendChild(closeBtn);

// Example 6: Esc key to close
document.addEventListener("keydown", e=>{
    if(e.key==="Escape"){
        modal.style.display="none";
        overlay.style.display="none";
    }
});

// Example 7: Dynamic modal content
function showModal(content){
    modal.innerHTML = content + `<button id="closeBtn">Close</button>`;
    overlay.style.display="block"; modal.style.display="block";
    document.querySelector("#closeBtn").addEventListener("click", ()=>{
        modal.style.display="none"; overlay.style.display="none";
    });
}
showModal("Dynamic content example");

// Example 8: Multiple modals
const modal2 = modal.cloneNode(true);
modal2.id = "modal2";
document.body.appendChild(modal2);

// Example 9: Scroll lock when modal open
function lockScroll(){ document.body.style.overflow="hidden"; }
function unlockScroll(){ document.body.style.overflow="auto"; }
openBtn.addEventListener("click", lockScroll);
closeBtn.addEventListener("click", unlockScroll);

// Example 10: Fade in/out via CSS
modal.style.transition="opacity 0.3s";
modal.style.opacity=0;
openBtn.addEventListener("click", ()=>{
    modal.style.opacity=1;
    modal.style.display="block";
});
closeBtn.addEventListener("click", ()=>modal.style.opacity=0);
