import Heading from "@/components/Shared/Heading";
import TagItem from "../Portfolio/TagItem";

import { TechnologiesArray } from "@/pages/api/db/portfolio_items.json"

interface Props {
    label: string
}

interface ContentProps {
    heading: string
    technologies: Props[]
}

export default function Technologies(): React.ReactElement {
    return(
        <section className="relative w-full h-full gradient py-[100px] flex flex-col gap-[150px]" id="technologies">
            <div className="wrapper w-full">
                <div className="flex gap-3 items-center">
                    <Heading subheading={'About Me'} heading={'A Little Introduction'} className={"text-[white]"} />
                </div>
                <div className="grid my-10 gap-5 grid-cols-2 technologies md:grid-cols-1">
                    {TechnologiesArray.map((item: ContentProps, index) => 
                        <div className="flex flex-col gap-5" key={index}>
                            <span className="text-[white] text-[17px] font-semibold">{item.heading}</span>
                            <div className="flex gap-[10px] md:flex-wrap">
                                {item.technologies.map(({ label }, index) => 
                                    <TagItem label={label} key={index}/>
                                )}
                            </div>
                        </div>  
                    )}                  
                </div>
            </div>
        </section>
    )
}