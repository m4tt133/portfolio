import Heading from "./Heading"
import HeroImage from "./HeroImage"

export default function Hero(): React.ReactElement {
    return(
        <section className="relative min-h-[800px] w-full h-full gradient md:h-[100%] md:min-h-[auto] md:py-[80px] md:pt-[100px]">
            <div className="wrapper-component absolute w-full center-absolute hero flex justify-between items-center gap-10 md:relative md:flex-col-reverse">
                <Heading />
                <HeroImage />
            </div>
        </section>
    )
}