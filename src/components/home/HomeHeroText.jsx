import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const HomeHeroText = () => {
  useGSAP(()=>{
    var tl = gsap.timeline()
    gsap.from('span h3',{
      y: -100,
      duration: 0.3,
      delay: 1.6,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out'
    })
  })
  
  return (
    <div className='font-[font1] text-white text-[9.5vw] flex flex-col uppercase text-center leading-[9vw] relative z-30'>
      <span className='overflow-hidden'><h3>L'étincelle</h3></span>
      <span className='overflow-hidden'><h3>qui<span className='inline-block h-26 w-60 rounded-full overflow-hidden'><video autoPlay loop muted className='h-full w-full object-cover rounded-full' src="/assets/K72_video.mp4"></video></span>génère</h3></span>
      <span className='overflow-hidden'><h3>la créativité</h3></span>
    </div>
  )
}

export default HomeHeroText
