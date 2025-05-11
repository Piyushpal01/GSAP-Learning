// split text
gsap.registerPlugin(SplitText);

// let split = SplitText.create(".text", {
//     type: "lines", 
//     // type: "chars", // // only split into chars. (can also done in lines or words).
//     // mask: "chars", // // Apply mask on each character, mask ka use hota hai text ke upar ek masking effect apply karne ke liye.
// });

// Now looping over each character and assigning a class
// split.chars.forEach((char, idx) => {
//     char.classList.add(`char`);
// });
// gsap.from('.char, {
//     y: 300,
//     duration: 0.5,
//     stagger: 0.2, 
//     opacity: 0,  
//     repeat: -1,
//     yoyo: true,
// });

gsap.registerPlugin(ScrambleTextPlugin);

function scramble() {
    gsap.to(".text", {
        duration: 3, // Animation duration
        scrambleText: {
            text: "sic semper tyrannis", // Text ko scramble karna
            // chars: "all", // Scramble karte waqt chars ko effect dena
            speed: 0.4, // Scramble speed
            ease: "power2.out", // Ease function
        }
    });
}
function resetScramble(){
    gsap.to(".text", {
        duration: 3, // Animation duration
        scrambleText: {
            text: "Veni, Vidi, Vici", // Text ko scramble karna
            // chars: "all", // Scramble karte waqt chars ko effect dena
            speed: 0.4, // Scramble speed
            ease: "power2.out", // Ease function
        }
    });
}

// Scramble text animation on hover
// document.querySelector('.text').addEventListener("mouseenter", scramble);
// document.querySelector('.text').addEventListener("mouseleave", resetScramble);

// Scramble text animation on click.
document.querySelector('.button').addEventListener('click', scramble);
document.querySelector('.reset').addEventListener('click', resetScramble);