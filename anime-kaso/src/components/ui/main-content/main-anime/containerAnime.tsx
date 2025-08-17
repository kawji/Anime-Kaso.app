
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        <article className="mt-3 max-w-[70vw] lg:min-h-50 w-[88%] ml-[0px]  h-auto flex flex-wrap lg:gap-4 gap-2 " >
            {children}
        </article>
    );
}
// p-8 bg-[#161515] shadow-white/30 border-white/20 border rounded-2xl