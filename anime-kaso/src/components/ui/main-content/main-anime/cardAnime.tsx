import { useEffect, useState } from "react";
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
        <Link href={`/anime/${id}`} className="p-[2px] hover:ring-2 flex flex-1 grow shrink-1 min-h-[250px] min-w-[170px] max-w-[200px] w-full mx-auto rounded-lg overflow-hidden relative hover:shadow-2xl hover:shadow-[#232323)] group transition-all cursor-pointer" >
            <article >
                <figure className="aspect-[3/4] h-full  overflow-hidden rounded-lg flex items-center justify-center relative " >
                    {isLoading && <Spinner position="absolute z-10 " />}
                    <img src={png}
                    className="flex opacity-90 object-cover rounded-lg w-full h-full hover:opacity-100 hover:scale-104 transition-all duration-500 ease-in-out " 
                    loading="lazy"
                    onLoad={()=> setTimeout(() => {
                        setIsLoading(false)
                    },(50)) }
                    />
                </figure>

                <footer className="absolute bottom-0 left-0 w-full p-2 flex flex-col bg-black/75 lg:h-[27%] " >
                    <h6 className="line-clamp-2 hover:text-[var(--primary-text-card)] ">{title}</h6>
                </footer>
            </article>
        </Link>
    );
}




{/* <span className="rounded px-2 py-1 text-[white/75] bg-black/50 flex justify-center items-center hover:bg-white/7 hover:text-white/85 transition-all ">
ผู้ชื่นชอบ&nbsp;{favorites}
</span> */}