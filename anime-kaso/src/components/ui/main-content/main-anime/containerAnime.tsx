
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        <article className="mt-3 max-w-[70vw] w-[88%] ml-0 h-auto grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-2 lg:gap-4" >
            {children}
        </article>
    );
}
// p-8 bg-[#161515] shadow-white/30 border-white/20 border rounded-2xl