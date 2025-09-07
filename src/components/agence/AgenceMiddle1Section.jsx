import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const AgenceMiddle1Section = () => {
  useGSAP(() => {
    gsap.to('.text1', {
      x: '-100%',
      duration: 230,
      repeat: -1,
      yoyo: true,
      ease: "none"
    })
    gsap.to('.text2', {
      x: '100%',
      duration: 260,
      repeat: -1,
      yoyo: true,
      ease: "none"
    })
    gsap.to('.text3', {
      x: '-100%',
      duration: 230,
      repeat: -1,
      yoyo: true,
      ease: "none"
    })
    gsap.to('.text4', {
      x: '100%',
      duration: 260,
      repeat: -1,
      yoyo: true,
      ease: "none"
    })
    ScrollTrigger.create({
      trigger: '.panel-1',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: 1,
      markers: false,
    });
    ScrollTrigger.create({
      trigger: '.panel-2',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: 1,
      markers: false,
    });
    gsap.to(['.text1', '.text2'], {
      y: '-800%',
      opacity: 0,
      ease: 'power4.in',
      scrollTrigger: {
        trigger: '.panel-1',
        start: 'top 100%',
        end: 'bottom top',
        scrub: 0.4,
      },
    });
    gsap.to(['.text3', '.text4'], {
      y: '-800%',
      opacity: 0,
      ease: 'power4.in',
      scrollTrigger: {
        trigger: '.panel-2',
        start: 'top 100%',
        end: 'bottom top',
        scrub: 0.4,
      },
    });
    gsap.to('.agence-container', {
      backgroundColor: 'black',
      delay: 0.1,
      scrollTrigger: {
        trigger: '.panel-1',
        start: 'top 90%',
        end: 'top 75%',
        scrub: 1,
      }
    });
  })
  return (
    <>
      <div className="h-[205vh] w-full flex flex-col items-center overflow-x-hidden scrollbar-hide">
        <div className="panel-1 h-screen w-full relative z-60 flex justify-center items-center">
          <img loading='lazy'
            className="h-full rounded-4xl relative z-20 select-none"
            src="https://k72.ca/uploads/teamMembers/Michele_640X980-640x960.jpg?auto=compress&cs=tinysrgb&w=640"
            alt=""
          />
          <div className="text1 absolute top-[27%] left-0 h-[20vh] w-[2000vw] flex items-center gap-x-[85vw] z-10 pl-[56vw] ">
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              MICHÈLE</h1>
          </div>
          <div className="text2 absolute top-[57%] left-0 h-[20vh] w-[2500vw] flex items-end leading-[0.65] gap-x-[80vw] z-30 translate-x-[-70.2%]">
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                RIENDEAU</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directrice de la stratégie</h3>
            </div>
          </div>
        </div>
        <div className="panel-2 h-screen w-full relative z-60 flex justify-center items-center">
          <img loading='lazy'
            className="h-full rounded-4xl relative z-20 select-none"
            src="https://k72.ca/uploads/teamMembers/joel_640X960_3-640x960.jpg?auto=compress&cs=tinysrgb&w=640"
            alt=""
          />
          <div className="text3 absolute top-[27%] left-0 h-[20vh] w-[2000vw] flex items-center gap-x-[80vw] z-10 pl-[56vw] ">
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
            <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50]'>
              JOËL</h1>
          </div>
          <div className="text4 absolute top-[57%] left-0 h-[20vh] w-[2500vw] flex items-end leading-[0.65] gap-x-[80vw] z-30 translate-x-[-70.2%]">
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
            <div className="flex items-end">
              <h1 className='font-[font2] text-[10vw] uppercase text-[#d3fd50] mr-10'>
                LETARTE</h1>
              <h3 className='text-white font-[font2] text-[2vw] tracking-tighter uppercase '>Directeur de création adjoint</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgenceMiddle1Section
