
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        <article className="max-w-[70vw] p-8 w-[88%] lg:ml-[80px] sm:ml-[45px] ml-4 bg-[#2e2d2d] rounded-2xl h-auto flex flex-wrap lg:gap-4 gap-2 " >
            {children}
        </article>
    );
}