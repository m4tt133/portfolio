import { backendURL } from "@/config";
import Image from "next/image";

interface Props {
    content: object[]
}

export default function Clients({ content }: Props){
    return(
        <section className="pt-[100px] flex flex-col w-full gap-[30px]">
            <h3 className="font-bold text-[15px]">These Companies Trusted Me:</h3>
            <div className="flex justify-between items-center">
                {content.map(({ image }, index) => 
                    <Image src={backendURL + image.data.attributes.url} width={160} height={100} alt="" key={index}/>
                )}
            </div>
        </section>
    )
}