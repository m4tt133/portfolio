import Heading from "@/components/Shared/Heading";
import TagItem from "../Portfolio/TagItem";

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function Technologies({ content }: ContentProps): React.ReactElement {
    const { sharedheading, technologies } = content;
    
    return(
        <section className="relative w-full h-full gradient py-[100px] flex flex-col gap-[150px]">
            <div className="wrapper w-full">
                <div className="flex gap-3 items-center">
                    <Heading content={sharedheading} className={"text-[white]"} />
                </div>
                <div className="grid my-10 gap-5 grid-cols-2 technologies">
                    {technologies.data.map(({ attributes: item }, index) => 
                        <div className="flex flex-col gap-5" key={index}>
                            <span className="text-[white] text-[17px] font-semibold">{item.heading}</span>
                            <div className="flex gap-[10px]">
                                {item.technologies.map((item, index) => 
                                    <TagItem content={item} key={index}/>
                                )}
                            </div>
                        </div>  
                    )}                  
                </div>
            </div>
        </section>
    )
}