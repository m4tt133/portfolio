import Image from "next/image"
import { backendURL } from "@/config"

interface Props {
    image: {
        data: {
            attributes: {
                url: string
            }
        }
    }
}

interface ImageProps {
    content: Props
}

export default function HeroImage({ content }: ImageProps): React.ReactElement{
    const { url } = content.image.data.attributes;

    return(
        <Image src={backendURL + url} width={410} height={490} alt=""/>
    )
}