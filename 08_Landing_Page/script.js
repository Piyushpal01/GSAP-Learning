function page1Animation(){
    let tl = gsap.timeline();

    tl.from('nav, nav .li, nav .li h4', {
        y: -100,
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
        stagger: 0.2
    })
    tl.from('.center-part1 h2', {
        x: -200,
        opacity: 0,
        duration: 0.5,
    })
    tl.from('.center-part1 p', {
        x: -200,
        opacity: 0,
        duration: 0.5,
    })
    tl.from('.center-part1 button', {
        x: -200,
        opacity: 0,
        duration: 0.5,  
    })
    tl.from('.center-part2 img', {
        x: 300,
        opacity: 0,
        duration: 1.5,  
        ease: "bounce.out"
    }, "-=1.7") // -=1.7 hmne delay negative m dene k lie kra h kyunki tl m delay dikkt krta h, yhi tarika hta h dene k. isse tl se pehle hi chl jaega
    tl.from('.section1Bottom img', {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
    })
}
page1Animation()

function page2Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2', // targeting whole section, scrolling animation as default config.
            scroller: "body",
            start: "top 70%",
            end: "top -50%",
            scrub: 2,
        }
    })
    
    tl2.from('.services', {
        x: 300,
        opacity: 0,
        duration: 1,
    })
    tl2.from('#box1', {
        x: -100,
        opacity: 0,
        duration: 0.8,
    
    }, "anyname") // we are trying to make both box of row1 together and row2 together so we are giving "anyname" whatever u like.
    tl2.from('#box2', {
        x: 100,
        opacity: 0,
        duration:0.8,
    }, "anyname") // same name here as we want these two appear together.
    tl2.from('#box3', {
        x: -100,
        opacity: 0,
        duration: 0.8,
    
    }, "row2")
    tl2.from('#box4', {
        x: 100,
        opacity: 0,
        duration: 0.8,
    }, "row2")
    tl2.from('#box5', {
        x: -100,
        opacity: 0,
        duration: 0.8,
    
    }, "row3")
    tl2.from('#box6', {
        x: 100,
        opacity: 0,
        duration: 0.8,
    }, "row3")    
}
page2Animation();

function arrowAnimation(){
    let arrows = document.getElementsByClassName('icon');

    // console.log(arrows);
    for (let i = 0; i < arrows.length; i++) {
        let arrow = arrows[i];
        // console.log(arrow);
        
        // Adding event listeners to each 'arrow' (icon)
        arrow.addEventListener('mouseenter', () => {
          gsap.to(arrow, {
            rotate: 360,
            duration: 0.7,
            ease: "power2.out"
          });
        });
      
        arrow.addEventListener('mouseleave', () => {
          gsap.to(arrow, {
            rotate: 0,
            duration: 0.7,
            ease: "power2.in"
          });
        });
    }
};
arrowAnimation();

// custom cursor

let cursor = document.querySelector('#cursor');

window.addEventListener('load', () => {
    window.addEventListener('mousemove', (e) => {
        cursor.style.visibility = "visible";
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 0.7,
            ease: "back.out(1.7)"
        })
    })
})