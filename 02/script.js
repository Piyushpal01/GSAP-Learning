// scrollTrigger

/*
gsap.from("#page1 #box", {
    rotate: 720,
    delay: 1,
    duration: 2,
    scale: 0,
    borderRadius: "50%",
})
// now apply scrolltrigger on which ele u want to trigger on scroll.

gsap.from("#page2 #box", {
    rotate: 720,
    duration: 2,
    scale: 0,
    borderRadius: "50%",
    // scrollTrigger: "#page2 #box", // not preffered
    scrollTrigger: {
        trigger: "#page2 #box", // el which we have to trigger.
        scroller: "body",       // mostly body is written.
        markers: true,          // just helping points.
        start: "top 60%",       // to keep starting wherever we want. now animation will only trigger when el starting moint match with the page starting point.
        end: "top 30%",
        // scrub: true, // to create in-out effect, animate el while scrolling, jese-jese scroll hta jae vse-vse animate hta jae. cam have boolean value or num values from 1 to 5 , 1->lowest smooth, 5->highest smooth.
        scrub: 2, 
    }
})
*/

/*
gsap.from("#page2 h1", {
    x: 300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})
gsap.from("#page2 h2", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})
*/


// text-scroll effect
gsap.to("#page2 h1", {
    transform: "translateX(-200%)", // it will slide ele backwards from it's original position
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        // rule -> whenever use pin property alway trigger parent element, pin will stop the page until the scrolling is done.
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})