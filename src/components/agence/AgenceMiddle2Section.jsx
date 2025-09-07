import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const AgenceMiddle2Section = () => {
    const changeImg = useRef(null)
    const imgArray = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]
    useGSAP(() => {
        for (let i = 0; i <= imgArray.length - 1; i++) {
            document.querySelector(`.hover-img-${i}`).addEventListener('mouseenter', (e) => {
                changeImg.current.src = imgArray[i]
            })
            document.querySelector(`.hover-img-${i}`).addEventListener('mousemove', () => {
                gsap.to('.change-imgparent img', {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            document.querySelector(`.hover-img-${i}`).addEventListener('mouseleave', () => {
                gsap.to('.change-imgparent img', {
                    clipPath: 'inset(0% 100% 0% 0%)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
        document.querySelector('.hover-img-container').addEventListener('mousemove', () => {
            gsap.to('.change-imgparent', {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        document.querySelector('.hover-img-container').addEventListener('mouseleave', () => {
            gsap.to('.change-imgparent', {
                clipPath: 'inset(0% 100% 0% 0%)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    })
    return (
        <>
            <div className="h-[190vh] bg-black w-full py-40 relative z-80">
                <div style={{ clipPath: 'inset(0% 100% 0% 0%)' }} className="change-imgparent bg-[url('https://k72.ca/uploads/teamMembers/blank-640x960.jpg')] bg-cover bg-center h-[80vh] w-100 rounded-4xl fixed top-20 left-[25%] z-30 pointer-events-none block">
                    <img style={{ clipPath: 'inset(0% 100% 0% 0%)' }} loading='lazy' ref={changeImg} className='h-full w-full object-cover rounded-4xl pointer-events-none' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div>
                <div className="hover-img-container pointer-events-auto">
                    <div className="hover-img-0 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directeur principal</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Carl Godbout</h2>
                    </div>
                    <div className="hover-img-1 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Conceptrice-rédactrice</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Camille Brière</h2>
                    </div>
                    <div className="hover-img-2 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Conseillère</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Claire Robert</h2>
                    </div>
                    <div className="hover-img-3 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>VPP et directeur général</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Carl Godbout</h2>
                    </div>
                    <div className="hover-img-4 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directeur principal</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Pierre-Luc Paiement</h2>
                    </div>
                    <div className="hover-img-5 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directrice artistique</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Mélanie Laviolette</h2>
                    </div>
                    <div className="hover-img-6 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directrice conseil</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Meggie Lavoie</h2>
                    </div>
                    <div className="hover-img-7 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directeur artistique</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Alex Sauvageau</h2>
                    </div>
                    <div className="hover-img-8 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Conseiller</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Philippe Perreault</h2>
                    </div>
                    <div className="hover-img-9 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Planificateur stratégique principal</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Olivier Roeyaerts</h2>
                    </div>
                    <div className="hover-img-10 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Coordonatrice</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Lawrence Meunier</h2>
                    </div>
                    <div className="hover-img-11 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directrice principale</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Isabelle Beauchemin</h2>
                    </div>
                    <div className="hover-img-12 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directeur de création ajdoint</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Hugo Joseph</h2>
                    </div>
                    <div className="hover-img-13 text-white flex justify-between items-center border border-zinc-400 py-4 px-4 relative group cursor-pointer">
                        <div className="absolute z-10 top-0 left-0 h-0 w-full bg-[#d3fd50] group-hover:h-[100%] group-hover:text-black transition-all duration-300"></div>
                        <h3 className='relative z-20 font-[font2] text-md mb-6 group-hover:text-black transition-all duration-300'>Directeur de création adjoint</h3>
                        <h2 className='relative z-20 font-[font2] text-[2.6vw] uppercase group-hover:text-black transition-all duration-300'>Joël Letarte</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgenceMiddle2Section
