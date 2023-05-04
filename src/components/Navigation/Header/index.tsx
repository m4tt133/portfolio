import Image from "next/image";
import Link from "next/link";
import Logo from "public/Icons/Logo.svg";
import LinkedIn from "public/Icons/LinkedIn.svg";
import RegularButton from "@/components/Shared/Buttons/RegularButton";

import { useEffect } from "react";

export default function Header(): React.ReactElement {

    const linkVariant = {
		visible: {
			x: 0,
		},
		hidden: {
			x: '-100%',
		},
	};

    const bgVariant = {
		visible: {
			x: 0,
		},
		hidden: {
			x: '-100%',
		},
	};

    useEffect(() => {
        const debounce = (fn) => {

            let frame;

            return (...params) => {

                if (frame) {
                    cancelAnimationFrame(frame);
                }

                frame = requestAnimationFrame(() => {

                    fn(...params);
                });
            }
        };

        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        storeScroll();
    })

    return(
        <header className="fixed top-0 w-full py-5 z-[999999] md:px-[20px] md:pt-7 header">
            <section className="w-full relative max-w-[1095px] m-auto flex justify-between ">
                <div className="flex gap-10 items-center md:gap-4">
                    <Image src={Logo} width={150} height={100} alt=""/>
                    <Image src={LinkedIn} width={20} height={20} alt=""/>
                </div>
                <div className="flex gap-[40px] text-[white] font-regular items-center md:hidden">
                    <RegularButton cta={"Download My CV"} icon={true} props={{download: "CV - Mateusz Kąpała"}} link={'/cv.pdf'}/>
                </div>
            </section>
        </header>
    )
}