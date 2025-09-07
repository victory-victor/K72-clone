import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation().pathname
    const pageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.strtanim div', {
            y: '-100%',
            duration: 0.2,
            delay: 0.4,
            ease: 'power.out',
            stagger: { each: 0.04, from: 'end' },
        })
        tl.to('.strtanim div', {
            y: '100%',
            duration: 0.45,
            ease: 'power.out',
            stagger: { each: 0.06, from: 'end' },
            delay: 0.5,
        })
        tl.to('.strtanim', {
            display: 'none'
        })
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.2,
        })
    }, [currentPath])

    return (
        <>
            <div className="strtanim h-screen w-full fixed top-0 left-0 z-50 flex bg-transparent">
                <div className='h-full w-1/5 bg-black'></div>
                <div className='h-full w-1/5 bg-black'></div>
                <div className='h-full w-1/5 bg-black'></div>
                <div className='h-full w-1/5 bg-black'></div>
                <div className='h-full w-1/5 bg-black'></div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </>
    )
}

export default Stairs
