'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const colourList = ['#496989', '#58A399', '#A8CD9F', '#E2F4C5', '#8E7AB5', '#B784B7', '#E493B3', '#EEA5A6']

const dynamicComponents = {
  Balloon: dynamic(
    () =>
      import("react-single-balloon").then(
        (mod) => mod.Balloon
      ),
    { ssr: false },
  )
};

const Error = () => {
    const [supportsTouch, setSupportsTouch] = useState(false);
    useEffect(() => {
        setSupportsTouch("ontouchstart" in window || navigator.msMaxTouchPoints);
    }, []);

  const RFB = dynamicComponents.Balloon;

  function generateRandomColor() {
    const color = colourList[Math.ceil(Math.random() * 7)]
    return color
  }

    const [balloonsList, setBalloonsList] = useState([]);

    useEffect(() => {
    let audio = new Audio(
        'https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3'
        )
    
        const handleOnPop = () => {
        audio.play()
        }
    const intervalId = setInterval(() => {
        setBalloonsList(prevList => [
            ...prevList,
         <RFB size={100} onPop={handleOnPop} color={generateRandomColor()} opacity={0.7}/>
        ]);
    }, 1000);

    return () => clearInterval(intervalId);
    }, []);


  return (
    <section className="w-[80%] mx-auto py-16 max-w-[1200px] min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className='text-9xl font-bold w-full text-center max-[465px]:text-7xl bg-gradient-to-r from-[#496989] to-[#8E7AB5] bg-clip-text text-transparent'>Oh no.</h1>
        <p className='text-xl'>the page doesn't exist</p>
        {balloonsList}
      
    </section>
    )
}

export default Error