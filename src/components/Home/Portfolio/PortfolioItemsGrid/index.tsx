import Heading from "@/components/Shared/Heading";

import PortfolioItem from "./PortfolioItem";
import { IPortfolioItems } from "@/types/Home/Portfolio/portfolioItems";

export default function PortfolioItemsGrid({ content }: IPortfolioItems ){
    return(
        <div className="wrapper flex flex-col w-full gap-[50px] ">
            <Heading subheading="Portfolio" heading="Projects" className={"text-[white]"}/>
            <div className="flex flex-col gap-y-[100px] md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-[50px] lg:gap-y-[80px]">
                {content.map((item, index) => {
                    return <PortfolioItem content={item} key={index}/>
                })}
            </div>
        </div>
    )
}