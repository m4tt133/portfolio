import Image from "next/image";
import Logo from "/public/Icons/Logo.svg";
import LinkedIn from "/public/Icons/Linkedin.svg";

import RegularButton from "@/components/Shared/Buttons/RegularButton";

import { useState } from "react";
import Link from "next/link";

export default function Header(): React.ReactElement {

    const [scrolled, setScrolled] = useState<boolean>(false)

    const changeColor = () => {
        if(window.scrollY >= 90){ 
            setScrolled(true);
        }else{
            setScrolled(false)
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeColor)
    }

    return(
        <header className={`fixed top-0 w-full py-5 z-[999999] md:px-[20px] md:pt-7 ${scrolled ? 'header' : ''}`}>
            <section className="w-full relative max-w-[1095px] m-auto flex justify-between ">
                <div className="flex gap-10 items-center md:gap-4">
                    <Image src={Logo} width={150} height={100} alt=""/>
                    <Link href="https://www.linkedin.com/in/mttkapala/" target="_blank">
                        <Image src={LinkedIn} width={20} height={20} alt=""/>
                    </Link>
                </div>
                <div className="flex gap-[40px] text-[white] font-regular items-center md:hidden">
                    <RegularButton cta={"Download My CV"} icon={true} props={{download: "CV - Mateusz Kąpała"}} link={'/cv.pdf'}/>
                </div>
            </section>
        </header>
    )
}