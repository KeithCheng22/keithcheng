'use client'
import { useRef } from 'react'
import { desc1, desc2, desc3, desc4 } from './desc'
import {techStack} from './techStack'
import Exed from '../components/Exed'
import { eduBg, workBg } from './edu'
import Button from '../components/Button'
import Image from 'next/image'
import Me from '../../public/me.jpg'

import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const About = () => {

  const avatarComponent = useRef();
  const techComponent = useRef();
  gsap.registerPlugin(ScrollTrigger) 

  useGSAP(() => {
    // gsap code here...
    gsap.fromTo(".avatar-pic", 
    {opacity: 0, scale: 1.4},
    {opacity: 1, scale: 1, duration: 1.3, ease:"power3.inOut",}
    )

    let prevX = 0;
    window.onmousemove = (e) => {
      if (e.target.id == "photo") {
        const currentX = e.clientX;
        if (currentX > prevX) {
          gsap.to(".avatar", 
          { rotation: 2, x: 10, duration: 1 })
        } else {
          gsap.to(".avatar", { rotation: -2, x: -10, duration: 1});
        }
        prevX = currentX;
        
      } 
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: techComponent.current,
        start: "top bottom", 
        end: "bottom top",
        scrub: 4,
      }
    })

    tl.fromTo(".tech-row", 
      { x: (index) => {
        return index % 2 === 0 ? gsap.utils.random(800, 700) : gsap.utils.random(-800, -700)
      }},
      { x: (index) => {
        return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
      }},
    )
  
  });

  return (
    <>
    <section className="w-[80%] mx-auto py-16 min-[800px]:grid min-[800px]:grid-cols-2 max-w-[1200px]">
      <div ref={avatarComponent} className='avatar mb-8 col-start-2 row-start-1 min-[800px]:mx-auto'>
        <div className='w-fit relative overflow-hidden'>
        <Image src={Me} width={300}
        alt="Picture of the Keith" className='avatar-pic rounded-md border border-slate-500 opacity-0'/>

        <div id='photo' className='absolute inset-0 opacity-0 hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent scale-110 transition-opacity duration-300'></div>
        </div>

      </div>

      <div className='prose prose-invert prose-slate col-start-1 row-start-1'>
        <h1 className='text-5xl font-bold min-[900px]:text-6xl'>About Keith</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
        <p>{desc4}</p>
        <Button title="Resume" link="https://docs.google.com/document/d/1xlL_3XK6EcthDMnqyViGPasRd157TfwOHW5s1fGSAlE/edit#heading=h.5x0d5h95i329" />
      </div>

      <div className='prose prose-invert prose-slate mt-12'>
        <h1 className='text-5xl font-bold min-[900px]:text-6xl'>What I use</h1>
      </div>
    </section>

    <div ref={techComponent} className='overflow-hidden'>{techStack.map(({tech, colour}, index) => (
      <div  className='tech-row mb-8 flex items-center gap-4 justify-center text-slate-700' aria-label={tech}>
        {
          Array(6).fill(<span className='tech-item uppercase text-8xl font-extrabold tracking-tighter'>{tech}</span>, 0, 6)
        }
        {
          Array(1).fill(<span className={`tech-item uppercase text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent`} style={{backgroundImage: `linear-gradient(to top right, ${colour[0]} 50%, ${colour[1]} 50%)`}}>{tech}</span>)
        }
        {
          Array(7).fill(<span className='tech-item uppercase text-8xl font-extrabold tracking-tighter'>{tech}</span>, 0, 7)
        }
      </div>
    ))}
    </div>

    <section className="w-[80%] mx-auto py-10 min-[800px]:grid min-[800px]:grid-cols-2 max-w-[1200px]">
      {/* Exp */}
      <div className='prose prose-invert prose-slate col-span-2'>
          <h1 className='text-5xl font-bold min-[900px]:text-6xl'>Experience</h1>
          {workBg.map(({position, work, year, jd}) => <Exed studied={position} school={work} year={year} results={jd} />)}
        </div>

        {/* Edu */}
      <div className='prose prose-invert prose-slate col-span-2 mt-12'>
          <h1 className='text-5xl font-bold min-[900px]:text-6xl'>Education</h1>
          {eduBg.map(({studied, school, year, results}) => <Exed studied={studied} school={school} year={year} results={results} />)}
        </div>
    </section>
    </>
  )
}
export default About