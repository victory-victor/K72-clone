import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/footer/Footer'

const Projects = () => {
  const images = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
  },
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const heroes = gsap.utils.toArray('.hero')
    heroes.forEach((hero, i) => {
      gsap.fromTo(
        hero,
        { height: '25vh' },
        {
          height: '75vh',
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: () => `top+=${i * window.innerHeight * 0.5} 70%`,
            end: () => `top+=${i * window.innerHeight * 0.5} top`,
            scrub: 0.1,
            // markers: true,
          }
        }
      )
    })
    gsap.from('h1 h3', {
      y: -150,
      duration: 0.3,
      delay: 1.7,
      opacity: 0,
      stagger: 0.1,
      ease: 'power.out'
    })
    gsap.from('.heroparent', {
      y: -50,
      duration: 0.3,
      delay: 1.7,
      opacity: 0,
      stagger: 0.1,
      ease: 'power.out'
    })
    gsap.to('.projects-container', {
      scrollTrigger: {
        trigger: '.heroparent',
        start: 'top 10%',
        end: 'top 5%',
        scrub: 1,
        marksers: true,
        onEnter: () => {
          document.querySelector('.nav').style.display = 'none';
        },
        onLeaveBack: () => {
          document.querySelector('.nav').style.display = 'flex';
        },
      },
    });
  }, [])


  return (
    <div className='projects-container px-2'>
      <div className='h-[75vh] w-full  flex items-end leading-none'>
        <h1 className='text-[13vw] uppercase font-[font2] overflow-hidden'><h3>Projets</h3></h1>
      </div>
      <div className="heroparent -mt-7">
        {images.map((elem, i) => {
          return <div key={i} className="hero w-full h-[75vh] flex gap-2 mb-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
      <Footer />

    </div>
  )
}

export default Projects
