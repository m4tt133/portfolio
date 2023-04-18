import Heading from "@/components/Shared/Heading";
import PortfolioItem from "./PortfolioItem";
import Image from "next/image";
import { backendURL } from "@/config";
import Icon from "/public/Icons/Video.svg"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Cross from "public/Icons/Cross.svg"
import Play from "public/Icons/Play.svg"
import Pause from "public/Icons/Pause.svg"

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function Portfolio({ content }: ContentProps): React.ReactElement {
    const { sharedheading, portfolio_items, review } = content;
    const [ show, setShow ] = useState(null);
    const [ playing, setPlaying ] = useState(false);
    
    const variants = {
        visible: {
            opacity: 1,
            display: 'block',
            transition: { duration: 0.3, delay: 0.3 }
        },
        hidden: {
            opacity: 0,
            display: 'none',
            transition: { duration: 0.3, delay: 0.3 }
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

    const video = review.video.data.attributes;

    const vidRef = useRef(null);

    const handlePlay = () => {
        vidRef.current.play();
        setPlaying(true);
    }

    const handlePause = () => {
        vidRef.current.pause();
        setPlaying(false);
    }
    
    return(
        <section className="flex flex-col">
            <div className="relative w-full h-full gradient py-[100px] gradient-top flex flex-col gap-[150px]">
                <div className="wrapper flex flex-col w-full gap-[50px] ">
                    <Heading content={sharedheading} className={"text-[white]"}/>
                    <div className="flex flex-col">
                        {portfolio_items.data.map((item, index) => 
                            <PortfolioItem content={item} key={index}/>
                        )}
                    </div>
                </div>
                <div className="wrapper flex justify-between items-center gap-[50px] text-[white]">
                    <Image src={backendURL + review.image.data.attributes.url} width={215} height={215} alt="" style={{ borderRadius: "10px", objectFit: "cover", minWidth: "215px", maxHeight: "215px" }} />
                    <div className="flex flex-col gap-5">
                        <h3 className="font-[800] text-[27px]">{review.desc}</h3>
                        <div className="flex gap-[15px] items-center mb-5">
                            <div className="w-[50px] h-[1px] bg-[white]"></div>
                            <span className="text-[15px]">{review.position}</span>
                        </div>
                        {review.video && 
                            <button className="w-max underline underline-offset-[15px] flex gap-5 items-center" onClick={() => setShow(true)}>
                                {review.cta} <Image src={Icon} width={20} height={20} alt="" />
                            </button>
                        }
                    </div>
                </div>  
            </div>
            {show && 
                <motion.div className="fixed z-[99999] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] " animate={show ? 'visible' : 'hidden'} variants={variants}>
                    <div className="relative w-max">
                        <video className="relative rounded-[10px]" ref={vidRef}>
                            <source src={backendURL + video.url} type="video/mp4" />                       
                        </video>
                        <button className="bg-black p-2 w-max rounded-full absolute top-5 right-5" onClick={() => setShow(null)}>
                            <Image src={Cross} width={25} height={25} alt=""/>
                        </button>
                        <button className="bg-black p-3 w-[40px] h-[40px] rounded-full absolute bottom-5 left-5 flex items-center justify-center" onClick={playing ? handlePause : handlePlay }>
                            <Image src={playing ? Pause : Play} width={25} height={25} alt=""/>
                        </button>
                    </div>
                </motion.div>
            }
            {show && 
                <motion.div className="fixed z-[999] bg-[black] opacity-50 w-full h-full center-absolute" animate={show ? 'visible' : 'hidden'} variants={variantsBg}></motion.div>
            }
        </section>
    )
}