import React, { use, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {
  // to use gsap we gonna declare its hook useGSAP and define the gsap variable.
  // useGSAP(() => {
  //   gsap.to('.box', {
  //     x: 400,
  //     scale: -1,
  //     duration: 1,
  //     delay: 1,
  //   })
  // })

  // _______using useRef_______
  // const gsapRef = useRef();

  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 1200,
  //     scale: -1,
  //     duration: 2,
  //     delay: 0.5,  
  //     repeat: -1,
  //     rotate: 360,
  //     backgroundColor: "lightblue",
  //     yoyo: true,  
  //   })

  // }) 

  // ____When more el are present______
  // const boxRef = useRef();
  // useGSAP(() => {
  //   // gsap.to('.box', { // both are moving but we want only one to move so we are going to use ref
  //   //   rotate: 360,
  //   //   duration: 1,
  //   //   delay: 1,
  //   // })

  //   // using ref...
  //   // gsap.from(boxRef.current, {
  //   //   rotate: 360,
  //   //   duration: 1,
  //   //   delay: 1,
  //   // })
  // })

  // _______scope_______
  // const containerRef = useRef();
  // useGSAP(() => {
  //   gsap.from('.box', {
  //     rotate: 360,
  //     scale: 0,
  //     duration: 1,
  //     delay: 0.7,
  //   })
  // // }, {scope: ".container"}) // we can pass an object scope in the end, and give the val on which u want to appoy animation.
  // }, {scope: containerRef}) // we can pass an object scope in the end, and give the val on which u want to appoy animation.


  // useState hook animate...
  // const [circleval, setCircleval] = useState(0);
  // const random = gsap.utils.random(-500, 500, 10); // will get the random number on given parameters(range), third parameter says that give only those values in range of -500 to 500 which are divisible by 10.  
  // const [rotatation, setRotation] = useState(0);
  // const rotateX = gsap.utils.random(-360, 360, 30);

  // useGSAP(() => {
  //   gsap.to('.box', {
  //     x: circleval,
  //     // duration: 0,
  //     delay: 0.7,
  //     rotate: rotateX, 
  //   })
  // }, [circleval, rotateX]) // we have to make the circlevalue as dependency of gsap.

  // return (
  //   <>
  //     <main>
  //       {/* <div ref={gsapRef} className="box"></div> */}
  //       {/* <div ref={containerRef} className="container"> */}
  //         {/* <div className="circle"></div> */}
  //         {/* <div ref={boxRef} className="box"></div> */}
  //         {/* <div className="box"></div> */}
  //         {/* <div className="box"></div>
  //       </div>

  //       <div className="container2">
  //       <div className="circle"></div>
  //       <div className="box"></div>
  //       </div> */}

  //       <button onClick={() => {
  //         setCircleval(random);
  //         setRotation(rotateX);
  //         console.log(circleval);
  //       }}>Animate</button>
  //       {/* <div className="circle"></div> */}
  //       <div className="box"></div>

  // </main>
  // </>

  // )

  {/* 
  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);
  const [rotatation, setRotation] = useState(0);
  const rotateX = gsap.utils.random(-360, 360, 30); 
  const randomX = gsap.utils.random(-500, 500, 10);
  const randomY = gsap.utils.random(-400, 400, 20);
  
  
  const imageRef = useRef();
  
  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xVal,
      y: yVal,
      rotate: rotateX,
    })
    // }, [xVal, yVal, rotateX]);
  }, {scope:"main", dependencies: [xVal, yVal, rotateX]});
  
  return (
    <>
    <main>
    <img  ref={imageRef}
    onMouseEnter={() => {
      setXval(randomX);
      setYval(randomY);
      setRotation(rotatation);        
    }}
    src='https://i.pinimg.com/736x/33/70/29/33702949116bc77168dd93bdecc9f955.jpg' alt="" />
    </main>
    </>
  )
*/}

  // _____Context safe topic______
  
  // now doing things without gsap hook - useGSAP
  const boxRef = useRef();
  
  const {contextSafe} = useGSAP();

  const rotateBox = contextSafe(
    function(){
      gsap.to(boxRef.current, {
        rotate: 360,
        duration: 1,
      })
    }
  )
  
  return (
    <>
      <main>
        <button onClick={rotateBox}>Animate</button>
        <div ref={boxRef} className="box"></div>
      </main>
    </>
  )
}

export default App