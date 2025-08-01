

type Props = {
    title: string;
    subtitles: string;
    chapter: number;
}

export default function DetailCarousel({ title ,subtitles ,chapter }:Props) {
    return(
        <section className="flex gap-5 flex-col flex-1 pl-8 pt-8" >
            <p className=" lg:text-[22px] transition-colors  text-white/85 font-light line-clamp-1 cursor-pointer group-hover:text-[var(--color-pale)] " > {title} </p>
            <div className="flex gap-7 justify-start items-center">
                <span className="cursor-pointer transition-colors hover:text-[#2E85D9] font-extralight px-5 py-1.5 lg:text-[14px] bg-[var(--primary-card1-bg)] border border-[var(--primary-card1-border)] rounded-md text-[#87C5FF] ">
                    {subtitles}
                </span>
                <span className="cursor-pointer transition-colors hover:text-[#2E85D9] font-extralight px-5 py-1.5 lg:text-[14px] bg-[var(--primary-card1-bg)] border border-[var(--primary-card1-border)] rounded-md text-[var(--primary-card1-text)] ">
                    {chapter}&nbsp;ตอน
                </span>
            </div>
        </section>
    );
}