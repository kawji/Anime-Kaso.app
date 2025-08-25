type Props = {
    title:string
}

export default function TitleSidebar({title}:Props) {
    return(
        <section className="w-full h-auto flex items-center ">
            <span className=" lg:px-2 px-5 lg:py-1 py-3 w-full mb-5 lg:mb-2 lg:w-auto border-b border-white/25 rounded-none lg:border-none lg:rounded-md text-lg font-medium lg:text-xl text-white/90 lg:font-light leading-relaxed ">
                {title}
            </span>
        </section>
    );
}