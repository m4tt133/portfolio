import Image from "next/image"
import MainImage from "/public/Images/Hero/main.png"

export default function HeroImage(){
    return(
        <Image src={MainImage} width={350} height={450} alt="" className="heroImage md:max-h-[450px] md:w-full object-cover overflow-hidden rounded-xl"/>
    )
}