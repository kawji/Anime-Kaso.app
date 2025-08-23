import clsx from "clsx";

type PropsLogo = {
    text?:string;
}

export default function Logo({text}:PropsLogo) {
    return(
        <div className="flex items-center p-0">
            <span className={clsx(" font-bold ",text? text:'text-3xl')}>
                Anime&nbsp;-&nbsp;
            </span>
            <span className={clsx("text-[var(--primary-text)] font-bold ",text? text:'text-3xl')}  >
                Kaso.com
            </span>
        </div>
    );
}