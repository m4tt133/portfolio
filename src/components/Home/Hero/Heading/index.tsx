import Image from "next/image"
import Emoji from "/public/Icons/Emoji-Waving.svg"
import { motion } from "framer-motion"

interface Props {
    heading: string,
    subheading: string,
    desc: string
}

interface Content {
    content: Props
}

export default function Heading({ content }: Content): React.ReactElement{
    const { heading, subheading, desc } = content;

    return(
        <div className="flex flex-col gap-[20px] text-[white] z-10">
            <motion.span initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.2, duration: 0.3 }} className="flex gap-2">{subheading} <Image src={Emoji} width={20} height={20} alt=""/></motion.span>
            <motion.h1 initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.4, duration: 0.3 }} className="font-black text-[31px] max-w-[500px]">{heading}</motion.h1>
            <div className="w-[100px] h-[1px] bg-gray-dark"></div>
            <motion.p initial={{ opacity: 0, y: '-20px' }} animate={{ opacity: 1, y: '0px' }} transition={{ delay: 0.6, duration: 0.3 }} className="max-w-[450px] text-[15px]">{desc}</motion.p>
        </div>
    )
}