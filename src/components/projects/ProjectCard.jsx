import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className="img-container w-1/2 h-full relative group overflow-hidden hover:rounded-[40px] transition-all duration-300 cursor-pointer">
                <img loading='lazy' className='h-full w-full object-cover hover:rounded-[40px] group-hover:scale-[1.05] group-hover:brightness-75 transition-all duration-300' src={props.image1} alt="" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-5 rounded-4xl leading-none border-white border-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="whitespace-nowrap font-[font2] uppercase text-[4vw] ">Voir le projet</h3>
                </div>
            </div>
            <div className="img-container w-1/2 h-full relative group overflow-hidden hover:rounded-[40px] transition-all duration-300 cursor-pointer">
                <img loading='lazy' className='h-full w-full object-cover hover:rounded-[40px] group-hover:scale-[1.05] group-hover:brightness-75 transition-all duration-300' src={props.image2} alt="" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-5 rounded-4xl leading-none border-white border-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="whitespace-nowrap font-[font2] uppercase text-[4vw] ">Voir le projet</h3>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
