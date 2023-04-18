import Link from "next/link"

interface NavLinkProps {
    href: string;
    cta: string;
}

export const LinkItem: React.FC<NavLinkProps> = ({ href, cta })=> {
    return(
        <Link href={href} passHref>
            <a>
                {cta}
            </a>
        </Link>
    )
}