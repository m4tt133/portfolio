import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import Cross from "/public/Icons/Cross.svg"
import Play from "/public/Icons/Play.svg"
import Pause from "/public/Icons/Pause.svg"
import Image from 'next/image'

import { Video } from "@/pages/api/db/db.json"

import useWindowWidth from "@/hooks/useWindowWidth"

export default function FixedVideo(): React.ReactElement {
    const [ show, setShow ] = useState<boolean | null>(null);
    const [ playing, setPlaying ] = useState(false);
    const mobile = useWindowWidth() < 1900 ? true : false;

    const vidRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        vidRef?.current?.play();
        setPlaying(true);
    }

    const handlePause = () => {
        vidRef?.current?.pause();
        setPlaying(false);
    }

    const { scrollYProgress } = useScroll();

    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.4, }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.4, }
        }
    }

    const variantsBg = {
        visible: {
            opacity: 0.5,
            transition: { duration: 0.3, delay: 0.3 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3, delay: 0.3 }
        }
    }
  
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(!mobile){
            if(latest > 0.10){
                setShow(true)
            } else {
                setShow(null)
            }
        }
    })

    
    return(
        <>
            {show && 
                <motion.div className="fixed z-[999] bg-[black] opacity-50 w-full h-full center-absolute hidden xl:block" animate={show ? 'visible' : 'hidden'} variants={variantsBg}></motion.div>
            }
            {show && 
                <motion.div className="fixed h-fit z-[99999] bottom-5 right-5 opacity-0 xl:w-max xl:left-[50%] xl:top-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]" animate={show ? 'visible' : 'hidden'} variants={variants}>
                    <motion.div className="relative w-max">
                        <video className="relative rounded-[10px] max-w-[270px] xl:max-w-[350px] md:max-w-[none]" ref={vidRef}>
                            <source src={Video} type="video/mp4" />                       
                        </video>
                        <button className="bg-black p-2 w-max rounded-full absolute top-5 right-5 hidden xl:block" onClick={() => setShow(null)}>
                            <Image src={Cross} width={25} height={25} alt=""/>
                        </button>
                        <button className="bg-black p-3 w-[40px] h-[40px] rounded-full absolute top-5 left-5 flex items-center justify-center" onClick={playing ? handlePause : handlePlay }>
                            <Image src={playing ? Pause : Play} width={25} height={25} alt=""/>
                        </button>
                    </motion.div>
                    <span className="absolute left-0 w-full text-center top-[-45px] rounded p-2 px-4 text-xs text-white min-w-max font-normal shadow-md text-[white] bg-violet-light xl:hidden">
                        <p className="z-[5] relative">⭐ Check My Client Video Review! 🔽</p>
                    </span>
                </motion.div>
            }
            <button onClick={() => setShow(true)} className="fixed right-5 z-[999] hidden xl:block bottom-5 rounded bg-violet-light p-2 px-4 text-xs text-white min-w-max font-normal shadow-md text-[white] md:bg-violet-light">
                <p className="z-[5] relative">⭐ Check My Client Video Review!</p>
            </button>
        </>
    )
}