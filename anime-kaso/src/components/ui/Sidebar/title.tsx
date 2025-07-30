type Props = {
    title:string
}

export default function TitleSidebar({title}:Props) {
    return(
        <section className="w-full h-auto flex items-center pl-10 ">
            <span className="px-2 py-1 rounded-md text-[14px] text-white/50 font-light leading-relaxed ">
                {title}
            </span>
        </section>
    );
}