let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let tl = gsap.timeline(); // we stop the tl animation to automatic happen by giving {paused:true} inside timeline fn or u can mention in the end tl.pause().

tl.to("#full", {
    right: 0,
    duration: 0.4,
})

tl.from("#full h3", {
    x: 100,
    opacity: 0,
    duration:0.4,
    stagger: 0.3,
})
tl.from("#full i", {
    opacity: 0,
    scale: 0,
    duration: 0.3,  
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
})
cross.addEventListener("click", () => {
    tl.reverse();
})