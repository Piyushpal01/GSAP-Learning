/*
gsap.to -> this goes from initial state to final state.
gsap.from -> this goes from final state to initial state.
gsap.to ->

props inside .to() / .from() => 1'st parameter -> el which we have to anymate and in 2'nd parameter properites as key-value pair.
repeat=1 -> 2 times repeat for n value it will repeat n+1 times.
yoyo => works with repeat it come back after reaching final state.
stagger=1 -> to appear ele one after one, jitna time doge uske hisaab s aate jaege.
timeline -> to start the next animation of other el when the prev animation of other el is done, animation ek k baad ek chal krne k lie, taki sari animation ek sath chalu n ho. when we declare the variable which contains gsap.timeline() for e.g. let tl = gsap.timeline(); , we will use tl.to()/ tl.from()

*/

/*
gsap.to('#box1', {
    x: 1200,    
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: '50%',
    backgroundColor: "blue",
    // scale: -1,
    scale: 0.5,
    // repeat: 1 // 2 baar repeat hga ek khud ki animation ar ek is repeat ki
})

gsap.to('#box2',{
    x:1200,
    duration: 3,
    delay: 1,
    scale:"5%",
    rotate: 360,
    // repeat: 1,
    repeat: -1, // infinite
    yoyo: true,
})
// gsap.from('#box2',{
//     x:1200,
//     duration:3,
//     delay: 1
// })

// gsap.from('h2', {
//     y:50,
//     duration: 1,
//     delay:1,
//     opacity: 0,
//     color: "red",
//     stagger: -1
// })
*/

let tl = gsap.timeline();
/*
tl.to('#box1', {
    x: 1200,    
    duration: 2,
    delay: 1,
    rotate: 360,
    borderRadius: '50%',
    backgroundColor: "blue",
    scale: 0.5,
})
tl.to('#box2',{ // no need to give delay in this or after this timeline will automatically handle it.
    x:1200,
    duration: 3,
    scale:"5%",
    rotate: 360,
    repeat: -1, // infinite
    yoyo: true,
})
tl.from('#box3', {
    y:50,
    x: 200,
    duration: 1,
    color: "red",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
})
*/
tl.from('#nav', {
    y: -50,
    duration: 1,
})
tl.from("h2", {
    y: -10,
    opacity: 0,
    scale: 1.5,
})
tl.from("h3", {
    y: -10,
    opacity: 0,
    scale: 1.5,
    stagger: 1,
})
tl.from("h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    scale: 0.2,
    repeat: -1,
    yoyo: true,
})
