import Heading from "@/components/Shared/Heading";
import RichText from "@/components/Shared/RichText";
import { backendURL } from "@/config";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Cross from "public/Icons/Cross.svg"
import Search from "public/Icons/Search.svg"

export default function Knowledge({ content }){
    const { sharedheading, richtext, certificates } = content;

    const [ popup, setPopup ] = useState(null);

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
        <section className="wrapper-padding-y flex flex-col">
            <Heading content={sharedheading}/>
            <RichText content={richtext} />
            <motion.div className="flex justify-between gap-[100px] my-[75px]">
                {certificates.map(({ image }, index) => 
                    <motion.div initial="hidden" whileHover="visible" className="relative overflow-hidden cursor-pointer">
                        <Image src={backendURL + image.data.attributes.url} width={500} height={350} alt="" style={{ borderRadius: "10px" }} onClick={() => setPopup(image.data.attributes.url)}/>
                        <motion.button variants={variantsIcon} className="bg-black p-3 w-max rounded-full absolute bottom-5 right-5" onClick={() => setPopup(image.data.attributes.url)}>
                            <Image src={Search} width={20} height={20} alt=""/>
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
            <motion.div className="fixed z-[99999] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" animate={popup ? 'visible' : 'hidden'} variants={variants}>
                {popup && 
                    <div className="relative">
                        <Image src={backendURL + popup} width={1000} height={750} alt="" style={{ borderRadius: "10px" }}/>
                        <button className="bg-black p-2 w-max rounded-full absolute top-5 right-5" onClick={() => setPopup(null)}>
                            <Image src={Cross} width={25} height={25} alt=""/>
                        </button>
                    </div>
                }
            </motion.div>
            {popup && 
                <motion.div className="fixed z-[999] bg-[black] opacity-50 w-full h-full center-absolute" animate={popup ? 'visible' : 'hidden'} variants={variantsBg}></motion.div>
            }
        </section>
    )
}