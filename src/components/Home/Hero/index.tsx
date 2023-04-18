import Image from "next/image"
import Gradient from "/public/Backgrounds/Gradient-Hero.png"
import Heading from "./Heading"
import HeroImage from "./HeroImage"

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function Hero({ content }: ContentProps): React.ReactElement {
    const { heading, image } = content;

    return(
        <section className="relative min-h-[800px] w-full h-full gradient">
            {/* <Image src={Gradient} fill style={{ objectFit: "cover", position: "absolute", transform: "translateX(25%)" }} alt=""/> */}
            <div className="wrapper-component absolute w-full center-absolute flex md:flex-col justify-between items-center gap-10">
                <Heading content={heading}/>
                <HeroImage content={image} />
            </div>
        </section>
    )
}