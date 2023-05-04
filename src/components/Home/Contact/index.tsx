import Heading from "@/components/Shared/Heading";
import RegularButton from "@/components/Shared/Buttons/RegularButton";
import { useState } from "react";

export default function Contact(): React.ReactElement {
    const [ copied, setCopied ] = useState(false);
    
    return(
        <section className="wrapper-padding-y">
            <div className="md:hidden">
                <Heading subheading="Contact" heading="Contact Info" />
            </div>
            <div className="flex flex-col gap-[60px] my-[60px]">
                <div className="flex items-center gap-5 text-[21px] md:flex-col">
                    <p className="font-bold ">Write To Me:</p>
                    <a href="mailto:mateusz.k@codixe.co" className="font-[500] underline underline-offset-[10px]">mateusz.k@codixe.co</a>
                    <span className="font-bold text-[15px]">or</span>
                    <div className="group relative ">
                        <RegularButton cta={'Copy My Email'} onClick={() => {navigator.clipboard.writeText("mateusz.k@codixe.co"), setCopied(true)}} icon={false}/>
                        <span className="absolute right-[-75px] top-[-45px] scale-0 rounded bg-black p-2 px-4 text-xs text-white group-hover:scale-100 min-w-max font-normal shadow text-[white]">
                            <div className="relative">
                                <span className="z-[5] relative">{copied ? '✔️ Email Copied!' : 'Copy my email'}</span>
                                <div className="absolute rotate-45 h-[20px] w-[20px] bg-black bottom-[-10px] z-0"></div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-5 text-[21px] md:flex-col">
                    <p className="font-bold ">Call Me Anytime:</p>
                    <a href="tel:+48 787 646 199" className="font-[500] underline underline-offset-[10px]">+48 787 646 199</a>
                </div>
            </div>
        </section>
    )
}