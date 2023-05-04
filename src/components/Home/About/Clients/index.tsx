import Image from "next/image";
import Marquee from "react-fast-marquee";

import Gamegoods from "/public/Images/Clients/gamegoods-logo.svg"
import Nudyess from "/public/Images/Clients/nudyess-logo.svg"
import YourKaya from "/public/Images/Clients/YourKaya-LogoWhite 1.svg"
import Nikalab from "/public/Images/Clients/nikalab-logo.svg"

export default function Clients(){
    return(
        <section className="pt-[100px] flex flex-col w-full gap-[30px] md:pt-[45px]">
            <h3 className="font-bold text-[15px]">These Companies Trusted Me:</h3>
            <div className="flex justify-between items-center md:hidden gap-5">
                <Image src={Gamegoods} width={160} height={100} alt=""/>
                <Image src={Nudyess} width={160} height={100} alt=""/>
                <Image src={YourKaya} width={160} height={100} alt=""/>
                <Image src={Nikalab} width={160} height={100} alt=""/>
                <Image src={YourKaya} width={160} height={100} alt=""/>
            </div>
            <div className="hidden justify-between items-center md:flex">
                <Marquee className="marquee-custom-styles" gradientWidth={50}>
                    <Image src={Gamegoods} width={150} height={120} alt=""/>
                    <Image src={Nudyess} width={150} height={120} alt=""/>
                    <Image src={YourKaya} width={150} height={120} alt=""/>
                    <Image src={Nikalab} width={150} height={120} alt=""/>
                    <Image src={YourKaya} width={150} height={120} alt=""/>
                </Marquee>
            </div>
        </section>
    )
}