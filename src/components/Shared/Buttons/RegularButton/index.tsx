import { useLottie } from "lottie-react";
import Animation from "public/download.json";

const style = {
    height: 50,
    width: 50,
    position: "absolute",
    right: 10
};

const options = {
    animationData: Animation,
    loop: false,
    autoplay: false,
};   

export default function RegularButton({ cta, onClick, icon, link, props }): React.ReactElement {
    const { View, play } = useLottie(options, style);

    return(
        <a href={link} {...props}>
            <button className="bg-violet-light px-[25px] py-[11px] text-[15px] font-semibold rounded-[5px] flex gap-3 text-[white] items-center w-[220px]" onClick={() => play()}>
                {cta}
                {View}
            </button>
        </a>
    )
}