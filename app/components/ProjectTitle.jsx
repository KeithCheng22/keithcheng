'use client'
import { useState, useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Link from "next/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const ProjectTitle = ({title, techStack, img, index, techClass}) => {

    const [imgId, setImgId] = useState('img1')
    let lastMousePos = useRef({xCor: 0, yCor: 0})
    const revealRef = useRef()


    useGSAP(() => {
        window.onmousemove = (e) => {
            const xCor = e.clientX;
            const yCor = e.clientY;
            const mousePos = {xCor, yCor};

            const speed = Math.sqrt(Math.pow(mousePos.xCor - lastMousePos.current.xCor, 2))
            const maxX = window.innerWidth - 250
            
            gsap.to(`#${imgId}`, {
                x: gsap.utils.clamp(0, maxX, mousePos.xCor - 110),
                rotation: speed * (mousePos.xCor > lastMousePos.current.xCor ? 1 : -1),
                ease: "back.out(2)",
                duration: 1.3,
                opacity: 1
            })
        }
      });

  return (
    <div className={`${techClass} relative project py-9 border-t border-t-slate-100 text-slate-200 flex items-center justify-between opacity-0 group overflow-hidden`}>
        <div>
            <h1 className='text-3xl font-semibold max-[500px]:text-xl'>{title}</h1>
            <h1 className='text-yellow-400 font-lg font-bold max-[500px]:text-sm'>{techStack}</h1>
        </div>
        <div className="flex items-center gap-2 text-lg max-[500px]:text-sm cursor-pointer hover:scale-105 transition-transform duration-500">
            <Link href={`/projects/${title}`} className="">Read More</Link>
            <FiArrowUpRight />
        </div>

        <div ref={revealRef} id={imgId} className="absolute w-[220px] h-full bg-cover pointer-events-none rounded-lg -z-10 transition-[background] duration-300 hidden group-hover:block" style={ {backgroundImage: `url(${img})`}} onMouseOver={() => setImgId(`img${index}`)}></div>
    </div>
  )
}

export default ProjectTitle