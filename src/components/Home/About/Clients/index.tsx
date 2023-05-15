import Image from "next/image";
import Marquee from "react-fast-marquee";

import Gamegoods from "/public/Images/Clients/gamegoods-logo.svg"
import Nudyess from "/public/Images/Clients/nudyess-logo.svg"
import YourKaya from "/public/Images/Clients/YourKaya-LogoWhite 1.svg"
import Nikalab from "/public/Images/Clients/nikalab-logo.svg"
import Aslandi from "/public/Images/Clients/aslandi-logo.svg"
import Cinead from "/public/Images/Clients/cinead-logo.svg"
import Link from "next/link";

export default function Clients(){
    return(
        <section className="pt-[100px] flex flex-col w-full gap-[30px] md:pt-[45px]">
            <h3 className="font-bold text-[14px]">These Companies Trusted Me:</h3>
            <div className="justify-between items-center flex">
                <Marquee className="marquee-custom-styles" gradientWidth={50} loop={0}>
                    <Link href="https://gamegoods.pl/" target="_blank">
                        <Image src={Gamegoods} width={200} height={150} alt=""/>
                    </Link>
                    <Link href="https://nudyess.com/" target="_blank">
                        <Image src={Nudyess} width={150} height={120} alt=""/>
                    </Link>
                    <Link href="https://yourkaya.pl/" target="_blank">
                        <Image src={YourKaya} width={150} height={120} alt=""/>
                    </Link>
                    <Link href="https://nikalab.pl/" target="_blank">
                        <Image src={Nikalab} width={120} height={120} alt=""/>
                    </Link>
                    <Link href="https://cinead.pl/" target="_blank">
                        <Image src={Cinead} width={120} height={120} alt=""/>
                    </Link>
                    <Link href="https://aslandi.pl/" target="_blank">
                        <Image src={Aslandi} width={100} height={120} alt=""/>
                    </Link>
                </Marquee>
            </div>
        </section>
    )
}