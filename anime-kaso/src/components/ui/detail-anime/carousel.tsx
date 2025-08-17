'use client'

import CardAnime from "../main-content/main-anime/cardAnime";
import { useAnimePopula } from "@/hooks/useAnimePopula";
import { TypeAnime } from "@/type/TypeAnime";

export default function CarouselScroll(  ) {
    const {data:animeList ,isLoading ,isError} = useAnimePopula(25)
    console.log('animeeeeeeeeeeeeeee ====>',animeList)
    return(
        <div className="w-full h-auto p-5 overflow-x-auto scroll-smooth whitespace-nowrap flex gap-5 scrollbar-hide ">
            {animeList?.data?.map((anime:TypeAnime)=> <CardAnime id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
        </div>
    );
}