import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AgenceHeroSection from '../components/agence/AgenceHeroSection'
import AgenceBottomSection from '../components/agence/AgenceBottomSection'
import AgenceMiddle2Section from '../components/agence/AgenceMiddle2Section'
import AgenceMiddle1Section from '../components/agence/AgenceMiddle1Section'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to('.agence-container', {
      backgroundColor: 'black',
      delay: 0.1,
      scrollTrigger: {
        trigger: '.panel-1',
        start: 'top 90%',
        end: 'top 75%',
        scrub: 1,
        onEnter: () => {
          document.querySelector('.nav').style.display = 'none';
        },
        onLeaveBack: () => {
          document.querySelector('.nav').style.display = 'flex';
        },
      },
    });

  })

  return (
    <div className='agence-container overflow-x-hidden leading-[0.9] relative bg-white'>
      <AgenceHeroSection />
      <AgenceMiddle1Section />
      <AgenceMiddle2Section />
      <AgenceBottomSection />

    </div>
  )
}

export default Agence
