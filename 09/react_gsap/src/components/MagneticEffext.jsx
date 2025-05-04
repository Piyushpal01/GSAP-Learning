import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import React, { Children, useRef } from 'react'


function MagneticEffext({ children }) {
    const elementRef = useRef(null);

    useGSAP(() => {
        const handleEffect = (e) => {
            const { clientX, clientY } = e;
            const { top, left, width, height } = elementRef.current.getBoundingClientRect();

            const mouseX = clientX - left;
            const mouseY = clientY - top;

            const centerX = width/2;
            const centerY = height/2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;

            const offsetX = distanceX * 1;
            const offsetY = distanceY * 1;

            gsap.to(elementRef.current, {
                x: offsetX,
                y: offsetY,
                duration: 1,
                ease: "elastic.out",
            })

        };

        const resetImage = () => {
            gsap.to(elementRef.current, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "power4.out",
            })
        };

        elementRef.current.addEventListener('mousemove', handleEffect);
        elementRef.current.addEventListener('mousemove', resetImage);

        return () => {
            elementRef.current.removeEventListener('mousemove', handleEffect);
            elementRef.current.removeEventListener('mousemove', resetImage);

        };
    }, []);

    return (
        <div ref={elementRef} className=''>
            {children}
        </div>
    )
}

export default MagneticEffext
