import React, { useRef } from 'react'
import boy from "./assets/boy.png"
import closeicon from "./assets/closeicon.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import MagneticEffext from './components/MagneticEffext'

function App2() {
    /*    
    const imageRef = useRef(null);

    useGSAP(() => {
        const handleEffect = (e) => {
            const { clientX, clientY } = e;
            const { top, left, width, height } = imageRef.current.getBoundingClientRect();

            const mouseX = clientX - left;
            const mouseY = clientY - top;

            const centerX = width/2;
            const centerY = height/2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;

            const offsetX = distanceX * 1;
            const offsetY = distanceY * 1;

            gsap.to(imageRef.current, {
                x: offsetX,
                y: offsetY,
                duration: 1,
                ease: "elastic.out",
            })

        };
        
        const resetImage = () => {
            gsap.to(imageRef.current, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "power4.out",
            })
        };

        imageRef.current.addEventListener('mousemove', handleEffect);
        imageRef.current.addEventListener('mousemove', resetImage);

        return () => {
            imageRef.current.removeEventListener('mousemove', handleEffect);
            imageRef.current.removeEventListener('mousemove', resetImage);

        }
    }, []);

    */
    
    return (
        <>
            <section className='relative h-screen w-screen bg-[#111] flex justify-center items-center'>

                <MagneticEffext>
                    <img src={boy}
                        width={300}
                        // ref={imageRef}
                        className='pointer-events-auto block'
                    />
                </MagneticEffext>
            </section>
        </>
    )
}

export default App2
