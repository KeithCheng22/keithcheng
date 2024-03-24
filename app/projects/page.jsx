'use client'
import React from 'react'
import { projects } from './projects'
import ProjectTitle from '../components/ProjectTitle'

import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {

  const projectList = projects.map(({title, techStack, img}, index) => <ProjectTitle key={title} title={title} techStack={techStack} img={img} index={index} techClass={`project-${index}`}/>)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    projectList.forEach((project, index) => {
      
      const trigger = `.project-${index}`;
      const projectElement = document.querySelector(trigger);

      gsap.fromTo(projectElement, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: projectElement,
          start: "top bottom-=50px", 
          end: "bottom center",
        }
      });
    });
  });

  return (
    <section className="w-[80%] py-16 mx-auto max-w-[1200px]">
        <section className='min-h-[70vh]'>
            <div className='prose prose-invert prose-slate col-start-1 row-start-1'>
                <h1 className='text-5xl font-bold min-[900px]:text-6xl'>Projects</h1>    
                <p>The tech projects I've created</p>            
            </div>

            <div className='border-b border-b-slate-100 mt-5'>
                {projectList}
            </div>
        </section>
    </section>
  )
}

export default Projects