import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const HomeBottomText = () => {
  useGSAP(()=>{
    gsap.from('button',{
      y: 100,
      duration: 0.3,
      delay: 1.7,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out'
    })
  })
  return (
    <div className='font-[font2] text-white'>
      <a href='/projects'><button className='text-[6.5vw] border-3 px-8 rounded-full uppercase leading-none mr-5 cursor-pointer hover:text-[#d3fd50]'>Projets</button></a>
      <a href='/agence'><button className='text-[6.5vw] border-3 px-8 rounded-full uppercase leading-none cursor-pointer hover:text-[#d3fd50]'>Agence</button></a>
    </div>
  )
}

export default HomeBottomText
