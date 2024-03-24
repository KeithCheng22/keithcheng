import React from 'react'
import Link from 'next/link'
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";

const Button = ({title, link, blank, handleClick, isActive}) => {
  return (
    <Link href={link} onClick={handleClick} target={blank ? '' : '_blank'} className="border border-slate-800 font-bold group overflow-hidden relative no-underline text-slate-800 bg-white py-1 px-3 flex items-center gap-1 rounded-md w-fit hover:scale-105 transition-transform ease-out" aria-label={title}>
        <span className={`bg-yellow-300 ${isActive ? 'y-0' : 'translate-y-8'} h-full inset-0 absolute group-hover:translate-y-0 z-2 transition-transform duration-300 ease-in-out`}></span>
        {title === 'Back' && <FiArrowLeft className='z-0 font-bold'/>} 
        <span className="z-0">{title}</span>
        {title !== 'Back' && <FiArrowUpRight className='z-0 font-bold'/>}
    </Link>
  )
}

export default Button