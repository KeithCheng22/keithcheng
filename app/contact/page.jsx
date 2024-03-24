'use client'
import React, { useRef, useState, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from "../../public/Scene"
import { ContactShadows, Environment } from '@react-three/drei'
import { PiArrowBendDownLeftFill } from "react-icons/pi";

let messageBoxHeight = 48
let prevHeight;

const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState(false);
    const message = useRef();


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))

        const curMessageHeight = message.current.scrollHeight; // Message height not the textarea

        if (curMessageHeight > messageBoxHeight) {
            prevHeight = messageBoxHeight;
            messageBoxHeight += 24;
        }

    }

    const form = useRef();
    

    const sleep = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve("done"), 2000);
        })
    }
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sleep();

    try {
        const res = await emailjs.sendForm('service_ki9k0zb', 'template_nmjh8at', form.current , {
            publicKey: 'bLxyiTUQji0V02Epp',
          })
        if(res.status === 200) {
            toast.success('Successfully sent!', {
                duration: 4000,
                position: 'bottom-center',
                className: 'text-xl font-bold',
            });
            setIsLoading(false);
            setFormData({
                user_name: '',
                user_email: '',
                message: '',
            })
        }
    } catch(err) {
        console.log(err.text)
    }
  };

  useGSAP(() => {
    gsap.to('.formInput', {
        opacity: 1,
        duration: 0.2,
        stagger: 0.3
    })
  })

  return (
    
    <section className="w-[80%] mx-auto py-16 max-w-[1200px] min-h-[70vh] min-[800px]:grid min-[800px]:grid-cols-2 items-center">
        <h1 className='text-5xl font-bold min-[900px]:text-6xl'>Contact Me</h1>
        <Toaster />

       <form ref={form} onSubmit={sendEmail} className='formInput min-[800px]:col-start-1 border flex flex-col p-5 bg-white/25 backdrop-blur-sm rounded-lg shadow-[0_8px_32px_0px_rgba(31,38,135,0.37)] mt-10 gap-4 opacity-0'>

            <div className='formInput flex flex-col opacity-0' name='user_name'>
                <label className='font-semibold tracking-wider'>Name</label>
                <input type="text" name="user_name" placeholder='John Doe' className='indent-1 text-black focus:outline-none rounded-sm h-8' autoFocus aria-required required onChange={handleChange} value={formData.user_name} />
            </div>
            
            <div className='formInput flex flex-col opacity-0'>
                <label className='font-semibold tracking-wider'>Email</label>
                <input type="email" name="user_email" placeholder='johndoe@gmail.com' className='indent-1 focus:outline-none text-black rounded-sm h-8' aria-required required onChange={handleChange} value={formData.user_email}/>
            </div>

            <div className='formInput flex flex-col opacity-0'>
                <label className='font-semibold tracking-wider'>Message</label>
                <textarea ref={message} name="message" placeholder='Type your message here!' className='text-black indent-1 focus:outline-none rounded-sm resize-none transition-[height] duration-500' aria-required required onChange={handleChange} value={formData.message} style={{height: messageBoxHeight}}/>
            </div>

            <div className='formInput opacity-0'>
            <button type="submit" value="Send" className={`relative group overflow-hidden w-fit border text-white border-white  rounded-md py-1 px-2 ${isLoading ? 'cursor-wait' : 'hover:scale-105 transition-transform duration-300 hover:text-slate-800 '} `} disabled={isLoading}>
                {!isLoading && <span className='bg-yellow-300 h-full translate-y-8 inset-0 absolute group-hover:translate-y-0 z-2 transition-transform duration-300 ease-in-out'></span>}
                <span className="z-0 relative font-semibold">
                    {isLoading ? "Sending" : "Let's Connect!"}

                    <span className={`inline-block transition-opacity ${isLoading ? 'opacity-100' : ' invisible w-0'}  duration-1000 delay-0`}>.</span>

                    <span className={`inline-block transition-opacity opacity-0 ${isLoading ? 'opacity-100' : 'invisible w-0'} w-fit duration-1000 delay-[1000ms]`}>.</span>

                    <span className={`inline-block transition-opacity opacity-0 ${isLoading ? 'opacity-100' : 'invisible w-0'} w-fit duration-1000 delay-[2000ms]`}>.</span>

                </span>
            </button>
            </div>
        </form>

        <div className='formInput min-[800px]:col-start-2 flex items-center opacity-0'>
            <Suspense fallback={null}>
                <Canvas className='w-[60%] jar' camera={{position: [0, 0, 10], fov: 30, near: 1, far: 40}}>
                    <Scene rotation-x={0.5} />
                    <ContactShadows position={[0, -1.8, 0]} opacity={0.65} scale={40} blur={1} far={9} />
                    <Environment preset='forest' />
                    <OrbitControls enableZoom={false}/>
                </Canvas>
            </Suspense>
            <h1 className='font-bold w-[35%]'>Hover me! <PiArrowBendDownLeftFill /></h1>
        </div>
    </section>
  )
}

export default Contact