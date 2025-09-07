import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Footer = () => {
  useGSAP(() => {
    gsap.from('footer', {
      y: 100,
      duration: 0.8,
      ease: 'power.inOut',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 105%',
        end: 'top 90%',
        scrub: 0.5,
        //   markers: true
      }
    })
  })
  return (
    <footer className='relative z-50 text-white uppercase flex items-end justify-between h-[50vh] w-full p-8 bg-black mt-5 rounded-4xl'>
      <div className="absolute top-4 left-6 px-5 rounded-4xl leading-none border-white border-2 mt-14 hover:text-[#d3fd50] cursor-pointer transition">
        <h3 className='whitespace-nowrap font-[font2] uppercase text-[5.2vw] '>Made in Montreal</h3>
      </div>
      <div className="absolute top-4 right-6 px-10 rounded-full leading-none border-white border-2 mt-14 hover:text-[#d3fd50] cursor-pointer transition">
        <h3 className='whitespace-nowrap font-[font2] uppercase text-[5.2vw] '>Contact</h3>
      </div>
      <div className='text-3xl tracking-tighter '>
        <i className="ri-global-line text-3xl mr-1"></i>
        Montereal_16:56:07
      </div>
      <div className='flex gap-2 tracking-tighter text-[0.75vw] font-[font2]'>
        <h3 className='hover:text-[#d3fd50] cursor-pointer transition'>Politique de confidentialité</h3>
        <h3 className='hover:text-[#d3fd50] cursor-pointer transition'>Avis de confidentialité</h3>
        <h3 className='hover:text-[#d3fd50] cursor-pointer transition'>Rapport éthique</h3>
        <h3 className='hover:text-[#d3fd50] cursor-pointer transition'>Options de consentment</h3>
      </div>
      <div>
        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer transition'>FB</button>
        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer transition'>IG</button>
        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer transition'>IN</button>
        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer transition'>BE</button>
      </div>
    </footer>
  )
}

export default Footer
