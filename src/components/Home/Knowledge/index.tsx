
import { useState } from "react";
import { Certificates } from "@/pages/api/db/db.json"

import CertificatesWrapper from "@/components/Home/Knowledge/CertificatesWrapper";
import Heading from "@/components/Shared/Heading";
import Popup from "@/components/Shared/Popup";

export default function Knowledge(): React.ReactElement{
    const [ popup, setPopup ] = useState<string | null>(null);

    return(
        <section className="wrapper-padding-y flex flex-col  gap-5">
            <Heading subheading="Knowledge" heading="I Understand Business and marketing"/>
            <div className="flex flex-col text-[14px] gap-4">
                <p className="font-semibold">I am a big believer in the power of knowledge. </p>
                <p>When I started my own company from scratch I started to educate myself on business, its processes and also the value in knowledge that is not related to hard skills strictly.</p>
                <p>The courses resolving around B2B marketing and Sales gave an opportunity to better understand the clients needs, and that is why I can manage to talk to clients about their business, since building software is just a leverge tool to scale.</p>
            </div>
            <CertificatesWrapper content={Certificates} setPopup={setPopup}/>
            <Popup popup={popup} setPopup={setPopup}/>
        </section>
    )
}