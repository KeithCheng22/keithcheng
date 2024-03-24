import React from 'react'
import Link from 'next/link'


const LinkCom = ({href, ariaLabel, title, isActive, handleClick}) => {
 
  return (
    <Link onClick={handleClick} href={href} className="font-bold relative overflow-hidden group" aria-label={ariaLabel}>
      <span className='relative z-30 p-2'>{title}</span>
      <span className={`bg-yellow-300 h-full translate-y-6 inset-0 absolute group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-md ${isActive ? 'translate-y-[1.2rem] rounded-none' : ''}`}></span>
    </Link>)
}

export default LinkCom