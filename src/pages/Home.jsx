import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeMiddleText from '../components/home/HomeMiddleText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(() => {
    gsap.from('img', {
      scale: 1.5,
      delay: 1.6
    })
    gsap.to('img', {
      opacity: 0,
      delay: 2.2
    })
  })
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
        <img className='h-full w-full object-cover absolute top-0 left-0 z-20' src="https://k72.ca/uploads/vlcsnap-2021-04-21-16h11m49s996.jpg" alt="" />
      </div>

      <div className="h-screen w-screen relative flex flex-col justify-between items-center p-3">
        <HomeHeroText />
        <HomeMiddleText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
