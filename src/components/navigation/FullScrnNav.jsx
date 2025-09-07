import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FullScrnNav = ({ FullScrNav, setFullScrNav }) => {
    useGSAP(() => {
        if (FullScrNav) {
            const tl = gsap.timeline()
            tl.to('.strtanim div', {
                y: '100%',
                duration: 0.3,
                ease: 'power.out',
                stagger: { each: 0.05, from: 'end' },
                delay: 0.08,
            })
            tl.to('.strtanim', {
                display: 'none'
            })
            document.querySelector('.h1div').addEventListener('mouseenter', () => {
                gsap.to('.movingDiv', {
                    x: '-100%',
                    duration: 40,
                    repeat: -1,
                    yoyo: true,
                    ease: "none"
                });
                gsap.to('.movingDivParent', {
                    height: '100%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out',
                    transformOrigin: 'center'
                })
            })
            document.querySelector('.h1div').addEventListener('mouseleave', () => {
                gsap.to('.movingDivParent', {
                    height: '0%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div1').addEventListener('mouseenter', () => {
                gsap.to('.movingDiv1', {
                    x: '-100%',
                    duration: 40,
                    repeat: -1,
                    yoyo: true,
                    ease: "none"
                });
                gsap.to('.movingDivParent1', {
                    height: '100%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div1').addEventListener('mouseleave', () => {
                gsap.to('.movingDivParent1', {
                    height: '0%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div2').addEventListener('mouseenter', () => {
                gsap.to('.movingDiv2', {
                    x: '-100%',
                    duration: 40,
                    repeat: -1,
                    yoyo: true,
                    ease: "none"
                });
                gsap.to('.movingDivParent2', {
                    height: '100%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div2').addEventListener('mouseleave', () => {
                gsap.to('.movingDivParent2', {
                    height: '0%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div3').addEventListener('mouseenter', () => {
                gsap.to('.movingDiv3', {
                    x: '-100%',
                    duration: 40,
                    repeat: -1,
                    yoyo: true,
                    ease: "none"
                });
                gsap.to('.movingDivParent3', {
                    height: '100%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.h1div3').addEventListener('mouseleave', () => {
                gsap.to('.movingDivParent3', {
                    height: '0%',
                    duration: 0.3,
                    delay: 0.1,
                    ease: 'power2.out'
                })
            })
            document.querySelector('.crossdiv').addEventListener('mouseenter', () => {
                gsap.to('.cross', {
                    backgroundColor: '#d3fd50'
                })
            })
            document.querySelector('.crossdiv').addEventListener('mouseleave', () => {
                gsap.to('.cross', {
                    backgroundColor: 'white'
                })
            })
            document.querySelector('.crossdiv').addEventListener('click', () => {
                gsap.to('.strtanim', {
                    display: 'flex'
                })
                gsap.to('.strtanim div', {
                    y: '0%',
                    duration: 0.2,
                    delay: 0.08,
                    ease: 'power.out',
                    stagger: { each: 0.04, from: 'start' },
                })
                gsap.to('.crossdiv', {
                    x: 150,
                    delay: 0.05,
                    duration: 0.2,
                    ease: 'power4.out'
                })
            })
            gsap.from('h1', {
                rotateX: '-120deg',
                opacity: 0,
                y: -20,
                duration: 1.2,
                delay: 0.25,
                ease: 'power4.out',
                transformOrigin: 'top',
                stagger: 0.01,
                scale: 1.2
            });

        }
    }, [FullScrNav]);
    return (
        <div>
            <div className="strtanim h-screen w-full fixed top-0 left-0 z-70 flex bg-transparent">
                <div className='h-full w-1/5 bg-[#d3fd50]'></div>
                <div className='h-full w-1/5 bg-[#d3fd50]'></div>
                <div className='h-full w-1/5 bg-[#d3fd50]'></div>
                <div className='h-full w-1/5 bg-[#d3fd50]'></div>
                <div className='h-full w-1/5 bg-[#d3fd50]'></div>
            </div>
            <div className='h-screen w-full bg-black fixed z-60 top-0'>
                <nav className='flex justify-between items-center h-20 w-full fixed top-0 left-0 '>
                    <svg className='h-30 w-30 mx-3' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                        <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                    <div onClick={() => {
                        setTimeout(() => {
                            setFullScrNav(false);
                        }, 700);
                    }} className="crossdiv h-48 mb-6 w-40 relative cursor-pointer">
                        <div className="h-full w-full flex justify-end items-center text-white text-2xl cursor-pointer">
                        </div>
                        <div className="cross absolute top-[50%] right-0 mx-5 mt-10 h-[0.2vw] w-36 -rotate-45 bg-white z-20"></div>
                        <div className="cross absolute top-[50%] right-0 mx-5 mt-10 h-[0.2vw] w-36 rotate-45 bg-white z-20"></div>
                    </div>
                </nav>
                <div className="text-white font-[font2] flex flex-col justify-center items-center h-screen text-[8vw] leading-[0.8] uppercase ">
                    <div className="h1div w-full border-[0.1px] border-zinc-500 pt-4 relative cursor-pointer">
                        <h1 className='text-center'>Projets</h1>
                        <div className="movingDivParent h-0 w-[1000vw] bg-[#d3fd50] absolute top-0 text-black cursor-pointer overflow-y-hidden">
                            <div className='movingDiv h-full w-full flex items-center'>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour tout voir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h1div1 w-full border-[0.1px] border-zinc-500 pt-4 relative cursor-pointer">
                        <h1 className='text-center'>Agence</h1>
                        <div className="movingDivParent1 h-0 w-[1000vw] bg-[#d3fd50] absolute top-0 text-black cursor-pointer overflow-y-hidden">
                            <div className='movingDiv1 h-full w-full flex items-center'>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg')] bg-cover bg-[center_top_18%] "></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg')] bg-cover bg-[center_top_20%]"></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg')] bg-cover bg-[center_top_18%] "></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg')] bg-cover bg-[center_top_20%]"></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg')] bg-cover bg-[center_top_18%] "></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg')] bg-cover bg-[center_top_20%]"></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg')] bg-cover bg-[center_top_18%] "></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg')] bg-cover bg-[center_top_20%]"></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg')] bg-cover bg-[center_top_18%] "></div>
                                <h1 className='pt-4'>Pour tout savoir</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg')] bg-cover bg-[center_top_20%]"></div>

                            </div>
                        </div>
                    </div>
                    <div className="h1div2 w-full border-[0.1px] border-zinc-500 pt-4 relative cursor-pointer">
                        <h1 className='text-center'>Contact</h1>
                        <div className="movingDivParent2 h-0 w-[1100vw] bg-[#d3fd50] absolute top-0 text-black cursor-pointer overflow-y-hidden">
                            <div className='movingDiv2 h-full w-full flex items-center'>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Pour envoyer un fax</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-two-hearts-drawn-together-with-one-line-outline-design-isolated-vector-png-image_50196284.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h1div3 w-full border-[0.1px] border-zinc-500 pt-4 relative cursor-pointer">
                        <h1 className='text-center'>Blogue</h1>
                        <div className="movingDivParent3 h-0 w-[1000vw] bg-[#d3fd50] absolute top-0 text-black cursor-pointer overflow-y-hidden">
                            <div className='movingDiv3 h-full w-full flex items-center'>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center"></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png')] bg-cover bg-center "></div>
                                <h1 className='pt-4'>Lire les articles</h1>
                                <div className="h-22 w-55 rounded-full ml-4 mr-4 bg-[url('https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='text-white uppercase flex items-end justify-between h-30 w-full p-8 mt-[-8vw]'>
                    <div className='text-3xl tracking-tighter '><i className="ri-global-line text-3xl mr-1"></i>Montereal_16:56:07</div>
                    <div className='flex gap-2 tracking-tighter text-[0.75vw] font-[font2]'>
                        <h3 className=' hover:text-[#d3fd50] cursor-pointer'>Politique de confidentialité</h3>
                        <h3 className=' hover:text-[#d3fd50] cursor-pointer'>Avis de confidentialité</h3>
                        <h3 className=' hover:text-[#d3fd50] cursor-pointer'>Rapport éthique</h3>
                        <h3 className=' hover:text-[#d3fd50] cursor-pointer'>Options de consentment</h3>
                    </div>
                    <div>
                        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer'>FB</button>
                        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer'>IG</button>
                        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer'>IN</button>
                        <button className='text-3xl border-2 rounded-full px-3 py-1 mr-1 font-bold hover:text-[#d3fd50] cursor-pointer'>BE</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default FullScrnNav
