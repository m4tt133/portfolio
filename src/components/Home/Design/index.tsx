import Heading from "@/components/Shared/Heading";
import Image from "next/image";
import Link from "next/link";

import Sample from "public/Images/design-cover.png"

export default function Design(): React.ReactElement{
    return(
        <section className="wrapper-padding-y flex justify-between w-full gap-10 lg:flex-col">
            <div className="flex flex-col gap-10 w-1/2 lg:w-full">
                <Heading subheading="Design & Creativity" heading="A Designer At Heart"/>
                <div className="flex flex-col text-[14px] gap-4">
                    <p className="font-semibold">I'm a developer and also designer.</p>
                    <p>I've built my career around the idea that software should be beautiful, as well as functional, because it's not just about how things look—it's also about how they feel.</p>
                    <p>I believe that design is more than just an aesthetic choice: it's an important part of how we interact with our world, and how we connect with each other. As such, I work hard to ensure that every project I take on is designed in such a way that makes users feel connected with the product and its creators.</p>
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-max gap-4 lg:w-full">
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={Sample} width={1000} height={600} alt=""/>
                </div>
                <Link href="https://cinead.pl/" target="_blank">
                    <p className=" text-[12px] font-semibold">Live Website: <span className="underline underline-offset-2">www.cinead.pl</span></p>
                </Link>
            </div>
        </section>
    )
}