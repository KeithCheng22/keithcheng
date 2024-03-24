'use client'

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Shapes from "./Shapes";

const Hero = () => {

    const container = useRef();

    useGSAP(() => {
        // gsap code here...
        const tl = gsap.timeline();

        tl.fromTo(".name-animation", {
            x: -100, opacity: 0, rotate: -10
        },
        {
            x: 0, opacity: 1, rotate: 0, ease: "elastic.out(1, 0.3)", duration: 1, transformOrigin: "left top", stagger: {
                each: 0.1,
                from: 'random'
            }, delay: 0.5
        })

        tl.fromTo(".job-title", 
        {
            y:20, opacity:0, scale: 1.2
        }, 
        {
            opacity: 1, y:0, duration:1, scale:1, ease: "elastic.out(1, 0.3)"
        })
        
      
      }, { scope: container });


    const renderLetters = (name) => {
        if (!name) return
        return name.split("").map((letter, index) => 
        <span key={index} className={`name-animation name-animation-${index} inline-block opacity-0`}>
            {letter}
        </span>)
    }

  return (
    <section className="w-[80%] mx-auto max-w-[1200px]">
        <section ref={container} className='grid min-h-[70vh] items-center grid-cols-1 min-[600px]:grid-cols-2 '>
            <Shapes />

            <div className='min-[600px]:col-start-1 min-[600px]:row-start-1'>
                <h1 className='mb-8 font-extrabold leading-none tracking-tighter min-[1400px]:text-[16vmin] min-[900px]:text-9xl max-[599px]:text-8xl text-7xl' aria-label='Keith Cheng'>
                    <span className='block text-slate-300'>{renderLetters("Keith")}</span>
                    <span className='-mt-[.2em] block text-slate-500'>{renderLetters("Cheng")}</span>
                </h1>

                <span className='job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent text-2xl uppercase tracking-[.2em] font-bold md:text-4xl opacity-0'>Full Stack Developer</span>
                
            </div>
        </section>
    </section>
  )
}

export default Hero