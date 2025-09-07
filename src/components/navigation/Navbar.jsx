import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FullScrnNav from './FullScrnNav'

const Navbar = () => {
    const [FullScrNav, setFullScrNav] = useState(false)
    const svgRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname;
        if (path === '/agence' || path === '/projects') {
            svgRef.current?.setAttribute('fill', 'black');
        }
        else {
            svgRef.current?.setAttribute('fill', 'white');
            document.querySelector('.blackdiv2').style.display = 'none'
            document.querySelector('.blackdiv1').style.display = 'none'
            document.querySelector('.blackdiv').style.height = '30%'
            document.querySelector('.blackdiv h3').style.opacity = 0
        }
    }, [location]);


    useGSAP(() => {
        var tl = gsap.timeline()
        document.querySelector('.blackdiv').addEventListener('mousemove', () => {
            gsap.to('.animdiv', {
                height: '100%',
                ease: 'power4.out'
            })
            gsap.to('.line', {
                backgroundColor: 'black',
                ease: 'power4.out'
            })
            gsap.to('.text', {
                color: 'black',
                ease: 'power4.out'
            })
        })
        document.querySelector('.blackdiv').addEventListener('mouseleave', () => {
            gsap.to('.animdiv', {
                height: '0%',
                ease: 'power4.out'
            })
            gsap.to('.line', {
                backgroundColor: 'white',
                ease: 'power4.out'
            })
            gsap.to('.text', {
                color: 'white',
                ease: 'power4.out'
            })
        })
        document.querySelector('.blackdiv1').addEventListener('mousemove', () => {
            gsap.to('.animdiv1', {
                height: '100%',
                ease: 'power4.out'
            })
            gsap.to('.text-1', {
                color: 'black',
                ease: 'power4.out'
            })
        })
        document.querySelector('.blackdiv1').addEventListener('mouseleave', () => {
            gsap.to('.animdiv1', {
                height: '0%',
                ease: 'power4.out'
            })
            gsap.to('.text-1', {
                color: 'white',
                ease: 'power4.out'
            })
        })
        document.querySelector('.blackdiv2').addEventListener('mousemove', () => {
            gsap.to('.animdiv2', {
                height: '100%',
                ease: 'power4.out'
            })
            gsap.to('.text-2', {
                color: 'black',
                ease: 'power4.out'
            })
        })
        document.querySelector('.blackdiv2').addEventListener('mouseleave', () => {
            gsap.to('.animdiv2', {
                height: '0%',
                ease: 'power4.out'
            })
            gsap.to('.text-2', {
                color: 'white',
                ease: 'power4.out'
            })
        })
        gsap.to('.blackdiv2', {
            y: -100,
            delay: 0.2,
            scrollTrigger: {
                trigger: 'body',
                start: 'top -30%',
                end: 'top -40%',
                scrub: 1,
            }
        })
        gsap.to('.blackdiv1', {
            y: -100,
            delay: 0.4,
            scrollTrigger: {
                trigger: 'body',
                start: 'top -30%',
                end: 'top -40%',
                scrub: 1,
            }
        })
        gsap.to('.blackdiv', {
            height: '30%',
            delay: 0.6,
            scrollTrigger: {
                trigger: 'body',
                start: 'top -30%',
                end: 'top -40%',
                scrub: 1,
            }
        })
        gsap.to(['nav', 'divs-3'], {
            height: '30%',
            delay: 0.6,
            scrollTrigger: {
                trigger: 'body',
                start: 'top -30%',
                end: 'top -40%',
                scrub: 1,
            }
        })
        gsap.to('.blackdiv h3', {
            opacity: 0,
            delay: 0.6,
            scrollTrigger: {
                trigger: 'body',
                start: 'top -30%',
                end: 'top -40%',
                scrub: 1,
            }
        })
    }, [])

    return (
        <div className='nav fixed top-0 left-0 w-full h-60 z-100'>
            <nav className='flex justify-between items-start h-full w-full'>
                <a className='inline-block p-2 px-4' href="/">
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="129" height="59" viewBox="0 0 103 44">
                        <path ref={svgRef} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg></a>
                <div className="divs-3 h-40 flex">
                    <a href="/projects" className='blackdiv2 h-14 bg-red-500 inline-block'>
                        <div className=" h-14  w-90 relative">
                            <div className="bg-black h-full w-full flex justify-start pb-1 items-end text-2xl px-5 cursor-pointer">
                                <h3 className="text-2 relative z-20 font-[font2] uppercase text-[1.5vw] text-white">Projets(16)</h3>
                            </div>
                            <div className="animdiv2 absolute top-0 h-[0%] mb-6 w-full bg-[#d3fd50] flex justify-end items-center text-white text-2xl px-5 cursor-pointer">
                            </div>
                        </div></a>
                    <a href="/agence" className='blackdiv1 h-24 inline-block'>
                        <div className=" h-24  w-90 relative">
                            <div className="bg-black h-full w-full flex justify-start items-end pb-2 text-2xl px-5 cursor-pointer text-white">
                                <h3 className="text-1 relative z-20 font-[font2] uppercase text-[1.5vw]">Agence</h3>
                            </div>
                            <div className="animdiv1 absolute top-0 h-[0%] mb-6 w-full bg-[#d3fd50] flex justify-end items-center text-white text-2xl px-5 cursor-pointer">
                            </div>
                        </div></a>
                    <div className="h-54 flex flex-col">
                        <div onClick={() => setFullScrNav(true)}
                            className="blackdiv h-35 mb-6 w-60 relative">
                            <div className="bg-black h-full w-full flex justify-start items-end pb-2 text-white text-2xl px-5 cursor-pointer">
                                <h3 className="text relative z-20 font-[font2] uppercase text-[1.5vw]">Menu</h3>
                            </div>
                            <div className="animdiv absolute top-0 h-[0%] mb-6 w-full bg-[#d3fd50] flex justify-end items-center text-white text-2xl px-5 cursor-pointer">
                            </div>
                            <div className="line fixed top-[4%] right-0 mx-5 h-[0.1vw] w-16 bg-white z-20"></div>
                            <div className="line fixed top-[4.7%] right-0 mx-5 h-[0.1vw] w-8 bg-white z-20"></div>
                        </div>
                    </div>
                </div>
            </nav>
            {FullScrNav && (
                <FullScrnNav FullScrNav={FullScrNav} setFullScrNav={setFullScrNav} />
            )}
        </div>
    )
}

export default Navbar
