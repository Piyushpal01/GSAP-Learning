let txt = document.querySelector('h1').textContent;
// let txt = ele.textContent; // whatever the text inside the tag is selected.


// _____ breaking the whole text into each characters ______
function breakText() {
    
    let characters = txt.split(''); // split each chars.
    let clutter = "";
    
    let halfLen = Math.floor(txt.length/2);

    // forEach -> parameters -> first one gives each ele, second one gives it's index
    characters.forEach((e, idx) => { // loop will run as much as chars are in characters variable.
        // console.log(e, idx);
        // clutter += `<span>${e}</span>`; // will add char by char to  clutter and form back the original txt.
    
        // douing another type animation.
        if(idx<halfLen) clutter += `<span class="a">${e}</span>`;
        else  clutter += `<span class="b">${e}</span>`
    })
    
    document.querySelector('h1').innerHTML = clutter;

}
breakText();

// gsap.from('h1 span', { // since span is inline el set it to inline block in css to apply animation.
//     y: 100,
//     opacity: 0,
//     duration: 0.3,
//     delay: 0.8,
//     stagger: 0.2,
// })

// Another animation
gsap.from('.a', {
    y: 80,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.2,
    scale: 4,
    // repeat: -1,
})
gsap.from('.b', {
    y: -80,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: -0.2,
    scale: 4,
    // repeat: -1,
})