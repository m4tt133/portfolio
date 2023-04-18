import Heading from "@/components/Shared/Heading";
import TagItem from "../Portfolio/TagItem";
import RegularButton from "@/components/Shared/Buttons/RegularButton";

interface Props {
    heading: object
    image: object
}

interface ContentProps {
    content: Props
}

export default function Contact({ content }: ContentProps): React.ReactElement {
    const { sharedheading } = content;

    return(
        <section className="wrapper-padding-y">
            <Heading content={sharedheading} />
            <div className="flex flex-col gap-[60px] my-[60px]">
                <div className="flex items-center gap-5 text-[21px]">
                    <p className="font-bold ">Write To Me:</p>
                    <a href="mailto:mateusz.k@codixe.co" className="font-[500] underline underline-offset-[10px]">mateusz.k@codixe.co</a>
                    <span className="font-bold text-[15px]">or</span>
                    <RegularButton cta={'Copy My Email'} onClick={() => navigator.clipboard.writeText("mateusz.k@codixe.co")}/>
                </div>
                <div className="flex items-center gap-5 text-[21px]">
                    <p className="font-bold ">Call Me Anytime:</p>
                    <a href="tel:+48 787 646 199" className="font-[500] underline underline-offset-[10px]">+48 787 646 199</a>
                </div>
            </div>
        </section>
    )
}