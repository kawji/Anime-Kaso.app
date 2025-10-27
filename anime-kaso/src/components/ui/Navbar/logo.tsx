import clsx from "clsx";
import Link from "next/link";

type PropsLogo = {
    text?:string;
}

export default function Logo({text}:PropsLogo) {
    return(
        <Link href='/' className="flex items-center p-0 shrink-0">
            <span className={clsx(" font-bold ",text? text:'lg:text-3xl sm:text-2xl text-[16px]')}>
                Anime&nbsp;-&nbsp;
            </span>
            <span className={clsx("text-[var(--primary-text)] font-bold ",text? text:'lg:text-3xl sm:text-2xl text-[16px] ')}  >
                Kaso.app
            </span>
        </Link>
    );
}