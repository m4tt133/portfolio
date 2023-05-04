import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    heading: string
    subheading: string
    className?: string
}

export default function Heading({ subheading, heading, className }: Props): React.ReactElement {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return(
        <div className={`flex flex-col ${className}`} ref={ref}>
            <span 
                className="font-semibold text-[15px]" 
                style={{
                    transform: inView ? "none" : "translateY(-20px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                    animationDelay: '0.3',
                }}
            >
                {subheading}
            </span>
            <h1 
                className="font-bold text-[35px]"
                style={{
                    transform: inView ? "none" : "translateY(-20px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    animationDelay: '0.3',
                }}
            >
                {heading}
            </h1>
        </div>
    )
}