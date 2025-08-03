
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        <article className="max-w-[70vw] p-0 w-[88%] lg:ml-[80px] sm:ml-[45px] ml-4  rounded-2xl h-auto flex flex-wrap lg:gap-4 gap-2 " >
            {children}
        </article>
    );
}