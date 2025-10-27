'use client'
import CardAnime from "../main-content/main-anime/cardAnime";
import { useAnimeList } from "@/hooks/useAnimeList";
import { TypeAnime } from "@/type/TypeAnime";
import { ArrowLeft ,ArrowRight } from 'lucide-react';
import { useRef } from "react";
import { Skeleton } from "./skeleton";

type PropsCarousel = {
    path:string;
}

export default function CarouselScroll({ path}:PropsCarousel ) {
    const {data:animeList ,isLoading ,isError} = useAnimeList(path)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollLeft = () => {
        if(containerRef.current) {
            containerRef.current.scrollBy({ left:-500 ,behavior:"smooth" })
        }
    }
    const scrollRight = () => {
        if(containerRef.current) {
            containerRef.current.scrollBy({ left:+500 ,behavior:"smooth" })
        }
    }

    return(
        <div className="w-full h-auto relative group py-2 pr-2 ">
            <button className="opacity-85 hover:opacity-100 transition-all cursor-pointer group-hover:flex absolute hidden items-center justify-center p-3 left-5 top-1/2 -translate-y-1/2 text-black bg-white rounded-full z-10  "
            onClick={scrollLeft}>
                <ArrowLeft />
            </button>
            <div style={{ scrollBehavior: 'smooth' }} ref={containerRef} className="w-full h-auto overflow-x-scroll whitespace-nowrap flex gap-5 scrollbar-hide p-2 ">
                {isLoading?  Array.from({length:8}).map((_,i)=>  <Skeleton width="w-[270px]" height="h-[250px]" rounded="rounded-lg" key={`skeleton${i}`} />) : animeList?.data?.map((anime:TypeAnime ,i:number )=> <CardAnime key={`${anime.mal_id}-${i}`} id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />) }
            </div>
            <button className="opacity-85 hover:opacity-100 transition-all cursor-pointer group-hover:flex absolute hidden items-center justify-center p-3 right-5 top-1/2 -translate-y-1/2 text-black bg-white rounded-full z-10  "
            onClick={scrollRight}>
                <ArrowRight />
            </button>

            <div className="pointer-events-none absolute right-0 top-0 bg-gradient-to-l from-black to-transparent w-18 h-full z-10 " />


        </div>
    );
}

