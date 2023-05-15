import Image from "next/image";
import Icon from "/public/Icons/Link.svg"
import TagItem from "../../../../Shared/TagItem";
import Link from "next/link";
import { IPortfolioItem } from "@/types/Home/Portfolio/portfolioItems";

export default function PortfolioItem({ content }: IPortfolioItem): React.ReactElement {
    const { logo, tags, heading, descriptions, cta, link, cover } = content;
    
    return(
        <div className="flex justify-between items-center text-[14px] lg:flex-col lg:gap-[30px] lg:col-span-1">
            <div className="w-full">
                <Image alt="" src={cover} width={500} height={370} className="portfolioCover" style={{ maxHeight: "370px", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
            </div>
            <div className="min-w-max flex flex-col gap-[25px] w-full md:min-w-[100%] md:w-full lg:gap-3 lg:min-w-[100%]">
                <Image src={logo} width={170} height={50} alt="" className="portfolioLogo"/>
                <h2 className="font-semibold text-[19px] text-[white]">{heading}</h2>
                <div className="flex gap-[10px]">
                    {tags.map(({ label }, index) => 
                        <TagItem label={label} key={index}/>
                    )}
                </div>
                <div className="text-[white]">
                    {descriptions.map((item, index) => 
                        <div className="flex flex-col" key={index}>
                            <div className="flex gap-1 my-[16px] lg:flex-col text-[12px]">
                                <span className="font-semibold">{item.label}: </span>
                                <p className="">{item.description}</p>
                            </div>
                            <div className="w-full h-[1px] bg-gray-dark"></div>
                        </div>
                    )}
                </div>
                <Link href={link} target="_blank">
                    <button className="text-[white] font-bold flex gap-[15px] items-center text-[14px] lg:mt-5">
                        {cta} <Image src={Icon} width={18} height={18} alt=""/>
                    </button>
                </Link>
            </div>
        </div>
    )
}