import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Footer from '../footer/Footer'

const AgenceBottomSection = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.last-img1',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: 1,
            markers: false,
        });
        ScrollTrigger.create({
            trigger: '.last-img2',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: 1,
            markers: false,
        });
        ScrollTrigger.create({
            trigger: '.last-img3',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: 1,
            markers: false,
        });
    })
    return (
        <>
            <div className="h-[350vh] w-full flex flex-col items-center overflow-x-hidden ">
                <div className="last-img1 h-screen w-full relative z-20 flex justify-center items-center group cursor-pointer rounded-4xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover object-[center_5%] brightness-90 group-hover:scale-[1.05] group-hover:brightness-75 transition-all duration-300"
                        src="https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg?auto=compress&cs=tinysrgb&w=640"
                        alt=""
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-3">
                        <h3 className="text-[2vw] font-[font2] mb-2 tracking-tight">Lamajeure</h3>
                        <h1 className="text-[5.5vw] tracking-tight font-bold font-[font2] group-hover:underline transition-all duration-300">Lamajeure</h1>
                    </div>
                </div>
                <div className="last-img2 h-screen w-full relative z-20 flex justify-center items-center group cursor-pointer overflow-hidden rounded-4xl">
                    <img
                        className="h-full w-full object-cover object-[center_5%] brightness-90 group-hover:scale-[1.05] group-hover:brightness-75 transition-all duration-300"
                        src="https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg?auto=compress&cs=tinysrgb&w=640"
                        alt=""
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-3">
                        <h3 className="text-[2vw] font-[font2] mb-2 tracking-tight">GardaWorld</h3>
                        <h1 className="text-[5.5vw] tracking-tight font-bold font-[font2] group-hover:underline transition-all duration-300">Crisis24</h1>
                    </div>
                </div>
                <div className="last-img3 h-screen w-full relative z-20 flex justify-center items-center group cursor-pointer overflow-hidden rounded-4xl">
                    <img
                        className="h-full w-full object-cover object-[center_5%] brightness-90 group-hover:scale-[1.05] group-hover:brightness-75 transition-all duration-300"
                        src="https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg?auto=compress&cs=tinysrgb&w=640"
                        alt=""
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-3">
                        <h3 className="text-[2vw] font-[font2] mb-2 tracking-tight">Lassonde</h3>
                        <h1 className="text-[5.5vw] tracking-tight font-bold font-[font2] group-hover:underline transition-all duration-300">Fruité</h1>
                    </div>
                </div>
                <div className="last-img4 h-[50vh] w-full relative z-20 flex justify-center items-center group cursor-pointer overflow-hidden rounded-4xl">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AgenceBottomSection
