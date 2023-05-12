import { useLottie } from "lottie-react";
import Animation from "@/pages/api/Lottie/download.json";

const style = {
    height: 50,
    width: 50,
    right: 10
};

const options = {
    animationData: Animation,
    loop: false,
    autoplay: false,
};  

interface Props {
    cta: string
    onClick?: () => void
    icon?: boolean
    link?: string
    props?: object
}

export default function RegularButton({ cta, onClick, icon, link, props }: Props): React.ReactElement {
    const { View, play } = useLottie(options, style);

    return(
        <a href={link} {...props}>
            <button className={`md:w-full relative buttonCta md:text-center bg-violet-light px-[25px] py-[11px] text-[14px] md:py-[15px] font-semibold rounded-[5px] flex gap-3 text-[white] items-center ${!icon ? "w-max md:w-full" : "w-[220px]"}`} onClick={onClick ? onClick : () => play()}>
                {cta}
                {icon === true ? 
                    <div className="absolute h-[50px] w-[50px] right-0">{View}</div> 
                    : 
                    null
                }
            </button>
        </a>
    )
}