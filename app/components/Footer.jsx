import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const date = new Date()
    const currentYear = date.getFullYear()

  return (
    <footer className='min-h-[30vh] flex items-center'>
        <div className='w-[80%] mx-auto max-w-[1200px] flex flex-col items-center min-[600px]:flex-row min-[600px]:justify-between'>

            <div className='text-center min-[600px]:flex min-[600px]:gap-5 min-[600px]:items-center'>
                <Link className='font-bold hover:text-yellow-300' href='/' aria-label='Home Page'>Keith Cheng</Link>
                <span className='max-[600px]:hidden text-slate-500 font-thin text-4xl'>/</span>
                <p className='font-thin text-sm'>&#169; {currentYear} Keith Cheng</p>
            </div>

            <section className='flex justify-between text-white  py-1 px-2 rounded-lg items-center'>
                <ul className="flex gap-3 items-center font-bold">
                    <Link href='about' aria-label='About Page' className='hover:text-yellow-300'>About</Link>
                    <p className="text-3xl text-slate-500 font-thin">/</p>
                    <Link href='projects' aria-label='Projects Page' className='hover:text-yellow-300'>Projects</Link>
                </ul>
            </section>

            <div className='flex gap-5'>
                <Link href='https://github.com/KeithCheng22' target='_blank' aria-label='Github'><FaGithub className='text-2xl hover:text-yellow-300'/></Link>

                <Link href='https://linkedin.com/in/keith-cheng-96994328b' target='_blank' aria-label='LinkedIn'><FaLinkedin className='text-2xl hover:text-yellow-300'/></Link>
            </div>


    
        </div>
    </footer>
  )
}

export default Footer