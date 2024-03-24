'use client'
import Button from "./Button"
import LinkCom from "./LinkCom"
import { usePathname } from "next/navigation"
import { useState, useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"


const Navbar = () => {
  const pathname = usePathname()
  const isActive = (href) => pathname === href
  
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(toggle => !toggle);
  }

  const count = useRef(0)

  useGSAP(() => {
    if (count.current === 0) {
      gsap.to('.mobileNav', 
        {
          display: 'none'
        }
      )
      count.current++
      setToggleMenu(true);
    } else {
      if (!toggleMenu) {
        gsap.to('.mobileNav', 
        {
          y:0,
          opacity: 1,
          ease: 'back.inOut',
          duration: 1,
          visibility: "visible",
          height: "100vh"
        }
        )
      } else {
        gsap.to('.mobileNav', 
        {
          opacity: 0,
          y: '100vh',
          ease: 'back.inOut',
          duration: 1,
          visibility: "none",
          height: 0
        },
        )
      }
    }
  },{ dependencies: [toggleMenu]})

  return (
    <>
    <nav className='max-[600px]:hidden sticky top-3 w-[80%] mx-auto max-w-[1200px] z-10'>
      {/* web */}
        <section className='border flex justify-between bg-white text-slate-800 py-1 px-2 rounded-lg items-center'>
          <LinkCom href='/' ariaLabel='Home Page' title='Keith Cheng' isActive={isActive('/')}/>
            <ul className="flex gap-3 items-center font-bold">
                <LinkCom href='/about' ariaLabel='About Page' title='About' isActive={isActive('/about')}/>
                <p className="text-3xl text-slate-500 font-thin">/</p>
                <LinkCom href='/projects' ariaLabel='Projects Page' title='Projects' isActive={isActive('/projects')}/>
                <Button title="Contact" link="/contact" blank="false" isActive={isActive('/contact')}/>
            </ul>
        </section>
    </nav>

    <nav className='min-[600px]:hidden sticky top-0 w-[100%] mx-auto max-w-[1200px] z-10'>
        {/* mobile */}
        <section className='border flex justify-between bg-white text-slate-800 py-4 px-2 rounded-t-none rounded-b-md items-center'>
          <LinkCom href='/' ariaLabel='Home Page' title='Keith Cheng'/>
          <div className={`transition-opacity duration-1000 flex flex-col gap-1 cursor-pointer ${toggleMenu ? 'opacity-100' : 'opacity-0'}`} onClick={() => setToggleMenu(toggle => !toggle)}>
            <div className="w-5 h-[0.1em] bg-slate-800"></div>
            <div className="w-5 h-[0.1em] bg-slate-800"></div>
            <div className="w-5 h-[0.1em] bg-slate-800"></div>
          </div>

          <div className={`mobileNav z-40 absolute bg-white inset-0 w-full h-[100vh] py-2 px-2 `}>
            <ul className="flex flex-col gap-3 items-end font-bold}">
                <h1 className="text-2xl cursor-pointer" onClick={() => setToggleMenu(toggle => !toggle)}>X</h1>
                <LinkCom href='/about' ariaLabel='About Page' title='About' isActive={isActive('/about')} handleClick={handleClick}/>
                <LinkCom href='/projects' ariaLabel='Projects Page' title='Projects' isActive={isActive('/projects')} handleClick={handleClick}/>
                <Button title="Contact" link="/contact" blank="false" handleClick={handleClick} isActive={isActive('/contact')}/>
            </ul>
          </div>

        </section>
    </nav>
    </>
  )
}

export default Navbar


