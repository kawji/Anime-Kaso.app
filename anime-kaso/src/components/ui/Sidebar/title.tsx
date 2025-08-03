type Props = {
    title:string
}

export default function TitleSidebar({title}:Props) {
    return(
        <section className="w-full h-auto flex items-center ">
            <span className="px-2 py-1 rounded-md text-[14px] lg:text-2xl text-white/90 font-light leading-relaxed ">
                {title}
            </span>
        </section>
    );
}