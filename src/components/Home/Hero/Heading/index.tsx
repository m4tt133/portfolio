import Image from "next/image"
import Emoji from "/public/Icons/Emoji-Waving.svg"
import { motion } from "framer-motion"
import RegularButton from "@/components/Shared/Buttons/RegularButton"

export default function Heading(): React.ReactElement{
    return(
        <div className="flex flex-col gap-[20px] text-[white] z-10">
            <motion.span initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.2, duration: 0.3 }} className="flex gap-2">
                Hi, I'm Mateusz <Image src={Emoji} width={20} height={20} alt=""/>
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.4, duration: 0.3 }} className="font-black text-[31px] max-w-[500px] md:max-w-none">
                Design & Business Oriented Fullstack Developer.
            </motion.h1>
            <div className="w-[100px] h-[1px] bg-gray-dark"></div>
            <motion.p initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.6, duration: 0.3 }} className="max-w-[450px] text-[15px] md:max-w-none">
                A value-centric developer delivering results through code, design, and business expertise.
            </motion.p>
            <RegularButton cta={"Download My CV"} icon={true} props={{download: "CV - Mateusz Kąpała", className: "hidden md:block md:mt-5"}} link={'/cv.pdf'}/>
        </div>
    )
}