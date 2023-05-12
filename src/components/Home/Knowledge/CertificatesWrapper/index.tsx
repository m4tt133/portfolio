import Image from "next/image";
import { motion } from "framer-motion"

import Search from "public/Icons/Search.svg"

import useWindowWidth from "@/hooks/useWindowWidth";

import { ICertificates } from "@/types/Home/Knowledge/certificates";

export default function CertificatesWrapper({ content, setPopup }: ICertificates): React.ReactElement{
    const mobile = useWindowWidth() < 800 ? true : false;

    const variants = {
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
        <motion.div className="flex justify-between gap-[100px] my-[75px] md:flex-col md:gap-5 lg:gap-[30px]">
            {content.map(({ image }, index) => 
                <motion.div initial="hidden" whileHover="visible" className="relative overflow-hidden cursor-pointer" key={index}>
                    <Image src={image} width={500} height={350} alt="" style={{ borderRadius: "10px" }} onClick={() => !mobile && setPopup(image)}/>
                    <motion.button variants={variants} className="bg-black p-3 w-max rounded-full absolute bottom-5 right-5 md:hidden" onClick={() => setPopup(image)}>
                        <Image src={Search} width={20} height={20} alt=""/>
                    </motion.button>
                </motion.div>
            )}
        </motion.div>
    )
}