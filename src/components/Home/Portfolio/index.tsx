import Heading from "@/components/Shared/Heading";
import PortfolioItem from "./PortfolioItem";
import Image from "next/image";
import PortfolioItems from "@/pages/api/db/portfolio_items.json"
import Review from "@/pages/api/db/portfolio_items.json"

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function Portfolio(): React.ReactElement { 
    return(
        <section className="flex flex-col">
            <div className="relative w-full h-full gradient py-[100px] gradient-top flex flex-col gap-[150px]">
                <div className="wrapper flex flex-col w-full gap-[50px] ">
                    <Heading subheading="Portfolio" heading="Projects" className={"text-[white]"}/>
                    <div className="flex flex-col gap-y-[100px] md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-[50px] lg:gap-y-[80px]">
                        {PortfolioItems.map((item, index) => 
                            <PortfolioItem content={item} key={index}/>
                        )}
                    </div>
                </div>
                <div className="wrapper flex justify-between items-center gap-[50px] text-[white] md:flex-col md:items-start">
                    <Image src={Review.image} width={215} height={215} alt="" style={{ borderRadius: "10px", objectFit: "cover", minWidth: "215px", maxHeight: "215px" }} />
                    <div className="flex flex-col gap-5">
                        <h3 className="font-[800] text-[27px]">{Review.desc}</h3>
                        <div className="flex gap-[15px] items-center mb-5">
                            <div className="w-[50px] h-[1px] bg-[white]"></div>
                            <span className="text-[14px]">{Review.position}</span>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}