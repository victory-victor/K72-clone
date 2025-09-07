import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const AgenceHeroSection = () => {
    const imgDivRef = useRef(null)
    const imgRef = useRef(null)
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
        gsap.to(imgRef.current, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.5,
            delay: 1.7,
            ease: 'power2.out'
        })
        gsap.from('h1 h3', {
            y: -150,
            duration: 0.3,
            delay: 1.7,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        })
        gsap.from('.para-anim', {
            y: -40,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut',
            opacity: 0,
            scrollTrigger: {
                trigger: '.para-anim',
                start: 'top 70%',
            }
        })
        gsap.from('.para-anim1', {
            y: -40,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.inOut',
            opacity: 0,
            scrollTrigger: {
                trigger: '.para-anim1',
                start: 'top 70%',
            }
        })
        gsap.to(imgDivRef.current, {
            scrollTrigger: {
                trigger: imgDivRef.current,
                start: "top 17.8%",
                end: "bottom -105%",
                pin: true,
                scrub: true,
                onUpdate: (e) => {
                    let imgIndex
                    if (Math.floor(e.progress * imgArray.length) == 14) {
                        imgIndex = imgArray.length - 1
                    }
                    else {
                        imgIndex = Math.floor(e.progress * imgArray.length)
                    }
                    imgRef.current.src = imgArray[imgIndex]
                }
            }
        })
    })
    return (
        <div>
            <>
                <div ref={imgDivRef} className="absolute top-33 left-115 h-80 w-57 z-0">
                    <img style={{ clipPath: 'inset(0% 100% 0% 0%)' }} loading='lazy' ref={imgRef} className='h-full w-full object-cover rounded-[20px]' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div>
                <div className='w-full text-center mt-[53vh] font-[font2] uppercase relative z-10'>
                    <h1 className='text-[20vw] font-bold overflow-hidden translate-y-10'><h3>Soixan7e</h3></h1>
                    <h1 className='text-[20vw] font-bold overflow-hidden'><h3>Douze</h3></h1>
                </div>
                <div className="h-screen flex justify-end relative z-10">
                    <p className='font-[font2] text-[3.6vw] h-screen w-[59%] text-left leading-[1] select-none'><span className='ml-72'>Notre</span> curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.</p>
                </div>
                <div className='h-screen w-full font-[font2] mt-10 pt-2 mb-30'>
                    <div className=" flex justify-evenly text-[1.4vw] tracking-normal text-left">
                        <div className='para-anim w-[30%] px-20'>
                            <h3>Expertise</h3>
                        </div>
                        <div className="para-anim leading-[1.1] w-[30%] text-left px-20">
                            <h3>Stratégie</h3>
                            <h3>Publicité</h3>
                            <h3>Branding</h3>
                            <h3>Design</h3>
                            <h3>Contenu</h3>
                        </div>
                        <div className=' w-[30%]'></div>
                    </div>
                    <div className="mt-50 flex justify-evenly text-[1.4vw] tracking-normal text-left">
                        <div className='para-anim1 w-[30%] leading-[1.1] px-20'>
                            <h3>Nos projets_ naissent dans l'humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</h3>
                        </div>
                        <div className="para-anim1 leading-[1.1] w-[30%] text-left px-20">
                            <h3>Notre création_ bouillonne dans un environnement où le talent a le goût d'exploser. Où on se sent libre d'être la meilleure version de soi-même.</h3>
                        </div>
                        <div className='para-anim1 w-[30%] px-20 leading-[1.1]'>
                            <h3>Notre culture_ c'est l'ouverture aux autres. Point. Tout l'équipage participe à bâtir une agence dont on est fiers.</h3>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default AgenceHeroSection
