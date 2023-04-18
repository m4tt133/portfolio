import Image from "next/image";
import Link from "next/link";
import Logo from "public/Icons/Logo.svg";
import LinkedIn from "public/Icons/LinkedIn.svg";
import RegularButton from "@/components/Shared/Buttons/RegularButton";

import { motion } from "framer-motion"

export default function Header(): React.ReactElement {

    const linkVariant = {
		visible: {
			x: 0,
		},
		hidden: {
			x: '-100%',
		},
	};

    return(
        <header className="absolute top-0 w-full py-5 z-[10] md:px-[20px]">
            <section className="w-full relative max-w-[1095px] m-auto flex justify-between md:w-max">
                <div className="flex gap-10 items-center md:gap-4">
                    <Image src={Logo} width={150} height={100} alt=""/>
                    <Image src={LinkedIn} width={20} height={20} alt=""/>
                </div>
                <div className="flex gap-[40px] text-[white] font-regular items-center md:hidden">
                    <div className="flex gap-[40px] items-center ">
                        <Link href={'/'}>
                            <motion.div initial="hidden" whileHover="visible" className="overflow-hidden">
                                <span>Test</span>
                                <motion.div className="w-full h-[1px] bg-[white]" variants={linkVariant}></motion.div>
                            </motion.div>                       
                        </Link>
                        <Link href={'/'}>
                            <motion.div initial="hidden" whileHover="visible" className="overflow-hidden">
                                <span>Test</span>
                                <motion.div className="w-full h-[1px] bg-[white]" variants={linkVariant}></motion.div>
                            </motion.div>                       
                        </Link>
                        <Link href={'/'}>
                            <motion.div initial="hidden" whileHover="visible" className="overflow-hidden">
                                <span>Test</span>
                                <motion.div className="w-full h-[1px] bg-[white]" variants={linkVariant}></motion.div>
                            </motion.div>                       
                        </Link>    
                    </div>
                    <RegularButton cta={"Download My CV"} icon={true} props={{download: "CV - Mateusz Kąpała"}} link={'/cv.pdf'}/>
                </div>
            </section>
        </header>
    )
}