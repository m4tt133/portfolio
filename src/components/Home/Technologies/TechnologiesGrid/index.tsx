import TagItem from "@/components/Shared/TagItem";
import { ITechnologies } from "@/types/Home/Technologies/technologies";

export default function TechnologiesGrid({ content }: ITechnologies): React.ReactElement{
    return(
        <div className="grid my-10 gap-5 grid-cols-2 technologies md:grid-cols-1 md:gap-6">
            {content.map((item, index) => 
                <div className="flex flex-col gap-5 md:gap-3" key={index}>
                    <span className="text-[white] text-[17px] font-semibold">{item.heading}</span>
                    <div className="flex gap-[10px] md:flex-wrap">
                        {item.technologies.map(({ label }, index) => 
                            <TagItem label={label} key={index}/>
                        )}
                    </div>
                </div>  
            )}                  
        </div>
    )
}