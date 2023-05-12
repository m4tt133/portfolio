import Image from "next/image";

interface Props {
    content: {
        image: string;
        desc: string;
        position: string;
    };
}

export default function ClientReview({ content }: Props){
    return(
        <div className="wrapper flex justify-between items-center gap-[50px] text-[white] md:flex-col md:items-start">
            <Image src={content.image} width={215} height={215} alt="" style={{ borderRadius: "10px", objectFit: "cover", minWidth: "215px", maxHeight: "215px" }} />
            <div className="flex flex-col gap-5">
                <h3 className="font-[800] text-[27px]">{content.desc}</h3>
                <div className="flex gap-[15px] items-center mb-5">
                    <div className="w-[50px] h-[1px] bg-[white]"></div>
                    <span className="text-[14px]">{content.position}</span>
                </div>
            </div>
        </div> 
    )
}