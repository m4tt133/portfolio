import Heading from "@/components/Shared/Heading";
import Clients from "./Clients";

export default function About(){
    return(
        <section className="wrapper-padding-y flex flex-col gap-5 md:gap-5 text-[15px]">
            <Heading subheading="About Me" heading="Introduction"/>
            <p className="font-semibold">I have always been an inquisitive and creative person. </p>
            <p>Throughout my professional journey, I have been on both sides, an employee and the boss. Both taught me some unique lessons on how things work in the IT industry. </p>
            <p>My entrepreneurial past has given me a lot of insight into the core business issues, and how the software we build can solve them. Also, my natural eye for design and past work experiences has helped me to understand how to create projects quickly, and accurately. Along the way of my business journey, I was happy to work with a lot of clients on challenging and exciting projects.</p>
            <Clients />
        </section>
    )
}