import Heading from "@/components/Shared/Heading";

import { TechnologiesArray } from "@/pages/api/db/db.json"
import TechnologiesGrid from "@/components/Home/Technologies/TechnologiesGrid";

export default function Technologies(): React.ReactElement {
    return(
        <section className="relative w-full h-full gradient py-[100px] flex flex-col gap-[150px]" id="technologies">
            <div className="wrapper w-full">
                <div className="flex gap-3 items-center">
                    <Heading subheading={'About Me'} heading={'A Little Introduction'} className={"text-[white]"} />
                </div>
                <TechnologiesGrid content={TechnologiesArray} />
            </div>
        </section>
    )
}