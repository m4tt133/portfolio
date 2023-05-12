import PortfolioItemsGrid from "@/components/Home/Portfolio/PortfolioItemsGrid";
import ClientReview from "@/components/Home/Portfolio/ClientReview";

import { Review, PortfolioItems } from "@/pages/api/db/db.json"

export default function Portfolio(): React.ReactElement { 
    return(
        <section className="flex flex-col">
            <div className="relative w-full h-full gradient py-[100px] gradient-top flex flex-col gap-[150px]">
                <PortfolioItemsGrid content={PortfolioItems} />
                <ClientReview content={Review} /> 
            </div>
        </section>
    )
}