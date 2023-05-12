import Image from "next/image";

import Cross from "public/Icons/Cross.svg"

import { motion } from "framer-motion";

import { IPopup } from "@/types/Home/Knowledge/certificates";

export default function Popup({ popup, setPopup }: IPopup): React.ReactElement{
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

    return(
        <>
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
        </>
    )
}