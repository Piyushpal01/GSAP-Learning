// Custom Cursor Animation

let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let imageDiv = document.querySelector('#image');

main.addEventListener("mousemove", (e) => {
    // now we are going to apply gsap as we can get the x and co-ords we're gonna use them.
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out(1.7)",
    })
});

imageDiv.addEventListener('mouseenter', () => {
    cursor.innerHTML = 'Galaxy';
    cursor.style.whiteSpace = "pre-wrap";
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "#c9c9c95a",
        fontWeight: 600,
    })
})
imageDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "",
        fontWeight: 0,
    })
})