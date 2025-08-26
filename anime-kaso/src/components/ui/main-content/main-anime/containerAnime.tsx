
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        
        <article className="mt-3 lg:max-w-[70vw] w-[95%] sm:w-[88%]  h-auto grid grid-cols-[repeat(auto-fill,minmax(80px,155px))]  sm:grid sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4 sm:gap-2 lg:gap-4" >
            {children}
        </article>
    );
}
// p-8 bg-[#161515] shadow-white/30 border-white/20 border rounded-2xl