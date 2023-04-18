import Heading from "@/components/Shared/Heading";
import RichText from "@/components/Shared/RichText";
import Clients from "./Clients";

export default function About({ content }){
    const { sharedheading, richtext, socialproof } = content;

    return(
        <section className="wrapper-padding-y flex flex-col">
            <Heading content={sharedheading}/>
            <RichText content={richtext} />
            <Clients content={socialproof} />
        </section>
    )
}