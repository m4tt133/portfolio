import Heading from "@/components/Shared/Heading";
import CallToAction from "@/components/Home/Contact/CallToAction";

export default function Contact(): React.ReactElement {
    return(
        <section className="relative w-full h-full gradient py-[100px] flex flex-col gap-[150px] text-[white]">
            <div className="wrapper w-full">
                <div className="md:hidden">
                    <Heading subheading="Contact" heading="Contact Info" />
                </div>
                <div className="flex flex-col gap-[60px] my-[60px]">
                    <CallToAction />
                </div>
            </div>
        </section>
    )
}