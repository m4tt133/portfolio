import RegularButton from "@/components/Shared/Buttons/RegularButton"
import { useState } from "react";

export default function CallToAction(){
    const [ copied, setCopied ] = useState<true | false>(false);

    return(
        <>
            <div className="flex items-center gap-5 text-[21px] md:flex-col">
                <p className="font-bold ">Write To Me:</p>
                <a href="mailto:mkapalaa@gmail.com" className="font-[500] underline underline-offset-[10px]">mkapalaa@gmail.com</a>
                <span className="font-bold text-[14px]">or</span>
                <div className="group relative ">
                    <RegularButton cta={'Copy My Email'} onClick={() => {navigator.clipboard.writeText("mkapalaa@gmail.com"), setCopied(true)}} icon={false}/>
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
        </>
    )
}