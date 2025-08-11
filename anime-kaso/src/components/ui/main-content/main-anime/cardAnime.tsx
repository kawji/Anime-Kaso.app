import { useState } from "react";
import Spinner from "../../system/spinner";
import Link from "next/link";
type Props = {
    id:number;
    png: string;
    title: string;
    favorites: number;
}

export default function CardAnime({ id ,png ,title ,favorites }:Props) {
    const [isLoading ,setIsLoading] = useState(true);

    return(
        <Link href={`/anime/${id}`} className="flex flex-1 grow shrink-1 min-h-[250px] min-w-[170px] max-w-[200px] w-full mx-auto rounded-lg overflow-hidden relative hover:shadow-2xl hover:shadow-[#232323)] group transition-all cursor-pointer" >
            <article >
                <figure className="aspect-[3/4]  overflow-hidden flex items-center justify-center relative " >
                    {isLoading && <Spinner position="absolute" />}
                    <img src={png}
                    className="opacity-90 object-cover w-full h-full group-hover:opacity-100 group-hover:scale-104 transition-all duration-500 ease-in-out " 
                    loading="lazy"
                    onLoad={()=> setIsLoading(false)}
                    />
                </figure>

                <footer className="absolute bottom-0 left-0 w-full p-2 flex flex-col gap-2.5 bg-black/75 " >
                    <h6 className="line-clamp-1 hover:text-[var(--primary-text-card)] ">{title}</h6>
                    <span className="rounded px-2 py-1 text-[white/75] bg-black/50 flex justify-center items-center group-hover:bg-white/75 group-hover:text-black transition-all ">
                        ผู้ชื่นชอบ&nbsp;{favorites}
                    </span>
                </footer>
            </article>
        </Link>
    );
}