import { backendURL } from "@/config";
import Image from "next/image";
import Icon from "/public/Icons/Link.svg"
import TagItem from "../TagItem";
import Link from "next/link";

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function PortfolioItem({ content }: ContentProps): React.ReactElement {
    const { logo, portfolio_item_tags, title, descriptions, cta, link, cover } = content.attributes;
    
    return(
        <div className="flex justify-between items-center text-[15px]">
            <div className="w-full">
                <Image src={backendURL + cover.data.attributes.url} width={500} height={370} style={{ maxHeight: "370px", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
            </div>
            <div className="min-w-max flex flex-col gap-[25px] w-max">
                <Image src={backendURL + logo.data.attributes.url} width={170} height={50} alt=""/>
                <h2 className="font-semibold text-[19px] text-[white]">{title}</h2>
                <div className="flex gap-[10px]">
                    {portfolio_item_tags.data.map((item, index) => 
                        <TagItem content={item} key={index}/>
                    )}
                </div>
                <div className="text-[white]">
                    {descriptions.map((item, index) => 
                        <div className="flex flex-col" key={index}>
                            <div className="flex gap-1 my-[16px]">
                                <span className="font-semibold">{item.label}</span>
                                <p>{item.description}</p>
                            </div>
                            <div className="w-full h-[1px] bg-gray-dark"></div>
                        </div>
                    )}
                </div>
                <Link href={link} target="_blank">
                    <button className="text-[white] font-bold flex gap-[15px] items-center text-[15px]">
                        {cta} <Image src={Icon} width={18} height={18} />
                    </button>
                </Link>
            </div>
        </div>
    )
}