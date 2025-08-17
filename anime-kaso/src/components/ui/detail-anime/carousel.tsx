'use client'

import CardAnime from "../main-content/main-anime/cardAnime";
import { useAnimePopula } from "@/hooks/useAnimePopula";
import { TypeAnime } from "@/type/TypeAnime";
import { ArrowLeft ,ArrowRight } from 'lucide-react';

export default function CarouselScroll(  ) {
    const {data:animeList ,isLoading ,isError} = useAnimePopula(25)

    return(
        <div className="w-full h-auto relative group py-2 pr-2 ">
            <button className="opacity-85 hover:opacity-100 transition-all cursor-pointer group-hover:flex absolute hidden items-center justify-center p-3 left-0 top-1/2 -translate-y-1/2 text-black bg-white rounded-full z-10  ">
                <ArrowLeft />
            </button>

            <div className="w-full h-auto overflow-x-auto scroll-smooth whitespace-nowrap flex gap-5 scrollbar-hide p-2 ">
                {animeList?.data?.map((anime:TypeAnime)=> <CardAnime id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
            </div>
            <button className="opacity-85 hover:opacity-100 transition-all cursor-pointer group-hover:flex absolute hidden items-center justify-center p-3 right-0 top-1/2 -translate-y-1/2 text-black bg-white rounded-full z-10  ">
                <ArrowRight />
            </button>

        </div>
    );
}