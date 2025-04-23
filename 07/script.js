// applying animation on page 1. text-animation
let txt = document.querySelector('.text').textContent;
function breakText(){
    let characters = txt.split('');    
    // console.log(characters);
    let clutter = '';

    let setlen = Math.floor(txt.length/2);

    characters.forEach((e, idx) => {
        if(idx <= setlen){
            clutter += `<span class = 'first'>${e}</span>`;
        }
        else{
            clutter += `<span class = 'second' >${e}</span>`;
        }
    })
    document.querySelector('h1').innerHTML = clutter;
}
breakText();

gsap.from('.first', {
    x: -200,
    stagger: -0.5,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scale: -1.15,
})
gsap.from('.second', {
    x: 200,
    stagger: 0.5,
    scale: 1.15,
})


// Scrolling text animation
window.addEventListener('wheel', (e) => {
    // console.log(e.deltaY); // deltaY gives the y value while scrolling, miving down values is positive, moving up val is -ve.
    if(e.deltaY > 0){  
        gsap.to('.marque', {
            transform: 'translateX(-200%)', // apni orginal pos s pheeche chla jaega.
            duration: 4,
            repeat: -1,
            ease: "none",
        })

        gsap.to('.marque img', {
            rotate: 180,
        })
    } else{
        gsap.to('.marque', {
            transform: 'translateX(0%)', // apni orginal pos s pheeche chla jaega.
            duration: 4,
            repeat: -1,
            ease: "none",
        })
        gsap.to('.marque img', {
            rotate: 0,
        })
    }
})

// custom cursor animation
let cursor = document.querySelector('#cursor');

function updateCursorPosition (e) {
    cursor.style.visibility = "visible";
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 2,
        // ease: "slow(0.7,0.7,false)", 
        ease: "elastic.out(1, 0.3)", 
    })
}

window.addEventListener('load', () => {
    window.addEventListener('mousemove', updateCursorPosition)
})