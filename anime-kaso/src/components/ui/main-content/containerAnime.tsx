
type Props = {
    children: React.ReactNode
}

export default function ContainerAnime({ children }:Props ) {
    return(
        <article className="max-w-[1000px]  h-auto grid grid-cols-[repeat(auto-fit,minmax(160px,220px))] lg:gap-3 gap-2 " >
            {children}
        </article>
    );
}