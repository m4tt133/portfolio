import Heading from "@/components/Shared/Heading";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Cross from "public/Icons/Cross.svg"
import Search from "public/Icons/Search.svg"

import Certificates from "@/pages/api/db/portfolio_items.json"
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Knowledge(){
    const [ popup, setPopup ] = useState(null);
    const mobile = useWindowWidth() < 800 ? true : false;

    const variants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    const variantsBg = {
        visible: {
            opacity: 0.5,
            transition: { duration: 0.3 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    const variantsIcon = {
        visible: {

            y: "0%",
            transition: { duration: 0.3 }
        },
        hidden: {

            y: "150%",
            transition: { duration: 0.3 }
        }
    }

    return(
        <section className="wrapper-padding-y flex flex-col  gap-5">
            <Heading subheading="Knowledge" heading="I Understand Business and marketing"/>
            <div className="flex flex-col text-[15px] gap-4">
                <p className="font-semibold">I have always been an inquisitive and creative person. </p>
                <p>Throughout my professional journey, I have been on both sides, an employee and the boss. Both taught me some unique lessons on how things work in the IT industry. </p>
                <p>My entrepreneurial past has given me a lot of insight into the core business issues, and how the software we build can solve them. Also, my natural eye for design and past work experiences has helped me to understand how to create projects quickly, and accurately. Along the way of my business journey, I was happy to work with a lot of clients on challenging and exciting projects.</p>
            </div>
            <motion.div className="flex justify-between gap-[100px] my-[75px] md:flex-col md:gap-5 lg:gap-[30px]">
                {Certificates.map(({ image }, index) => 
                    <motion.div initial="hidden" whileHover="visible" className="relative overflow-hidden cursor-pointer" key={index}>
                        <Image src={image} width={500} height={350} alt="" style={{ borderRadius: "10px" }} onClick={() => !mobile && setPopup(image)}/>
                        <motion.button variants={variantsIcon} className="bg-black p-3 w-max rounded-full absolute bottom-5 right-5 md:hidden" onClick={() => setPopup(image)}>
                            <Image src={Search} width={20} height={20} alt=""/>
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
            <motion.div className="fixed z-[99999] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:hidden" animate={popup ? 'visible' : 'hidden'} variants={variants}>
                {popup && 
                    <div className="relative">
                        <Image src={popup} width={1000} height={750} alt="" style={{ borderRadius: "10px" }}/>
                        <button className="bg-black p-2 w-max rounded-full absolute top-5 right-5" onClick={() => setPopup(null)}>
                            <Image src={Cross} width={25} height={25} alt=""/>
                        </button>
                    </div>
                }
            </motion.div>
            {popup && 
                <motion.div className="fixed z-[999] bg-[black] opacity-50 w-full h-full center-absolute md:hidden" animate={popup ? 'visible' : 'hidden'} variants={variantsBg}></motion.div>
            }
        </section>
    )
}