const images = document.querySelectorAll('.carousel-image');
const radius = 400; //  Circular layout ka radius (kitna door ek image center se hogi).

const progress = { value: 0 } // Ek object banaya jismein value ko dynamically change kiya ja sakta hai (carousel ka current scroll position ya angle).
const carousel = document.querySelector('.carousel');

/*
Observer -> way to sense meaningful events across all (touch/mouse/pointer) devices without wrestling with all the implementation details. Perhaps you want to respond to "scroll-like" user behavior which could be a mouse wheel spin, finger swipe on a touch device, a scrollbar drag, or a pointer press & drag...and of course you need directional data and velocity. 

Tell Observer which event types to watch (wheel, touch, pointer, and/or scroll) and it will collect delta values over the course of each requestAnimationFrame tic
*/

Observer.create({
    target: carousel,
    type: "wheel,pointer",
    onPress: (self) => { // function to call when the user presses down on the target element.
        carousel.style.cursor = 'grabbing';
    },
    onRelease: (self) => {
        carousel.style.cursor = 'grab';
    },
    onChange: (self) => { 
        // function to call when there is movement on either the y-axis (vertically) or the x-axis (horizontally). It will keep calling the function as long as the movement continues (subject to any tolerance threshold).

        gsap.killTweensOf(progress); // Kills all the tweens (or specific tweening properties) of a particular object or the delayedCalls to a particular function. 

        const p = self.event.type === 'wheel' ? self.deltaY * -0.005 : self.deltaX * 0.05;
        // Smooth animation se progress.value ko update karna hai ab.
        gsap.to(progress, {
            duration: 2,
            ease: 'power4.out',
            value: `+=${p}`
        }) 
    }
});

// har image ko ek circle ke around position aur rotate karega hmara animate fn.
const animate = () => {
    images.forEach((image, index) => {
        const theta = index / images.length - progress.value; // theta se har image ka angle pata chalta hai.
        const x = -Math.sin(theta * Math.PI * 2) * radius; // sin/cos se uski position circular path me set hoti hai.
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
        const c = Math.floor(index / images.length * 360);
        image.style.background = `hsla(${c}, 90%, 50%, 0.5)`;
    })
}
gsap.ticker.add(animate); // it updates the globalTimeline on every requestAnimationFrame event, so it is perfectly synchronized with the browser's rendering cycle. 