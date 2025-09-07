import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full relative z-10'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="/assets/K72_video.mp4"></video>
    </div>
  )
}

export default Video
