// ui
'use client'
import TitleContent from "@/components/ui/main-content/main-anime/titleContent";
import ContainerAnime from "@/components/ui/main-content/main-anime/containerAnime";
import CardAnime from "@/components/ui/main-content/main-anime/cardAnime";
import ContainerTitle from "@/components/ui/main-content/main-anime/containerTitle";
import CarouselAnime from "./carouselAnime";
import Pagination from "./pagination";
import { usePathname ,useSearchParams } from "next/navigation";
import { useAnimeList } from "@/hooks/useAnimeList";
import { useEffect, useState } from "react";
import { animeType } from "@/type/anime";

export default function MainContent() {
    const pathName = usePathname();
    const searchParams = useSearchParams()
    const [page ,setPage] = useState<number>(1);
    
    useEffect(()=> {
        const paginationPage = Number(searchParams.get('path') || 1)
        setPage(paginationPage);
    },[searchParams])

    const {data: animeList, isLoading, isError } = useAnimeList(page);
    
    console.log('loading ==>',isLoading);
    console.log('Error ==>',isError);
    console.log('Data Anime ==>',animeList);
    console.log('Data Anime ==>',page);



    return(
        <main className="flex flex-col items-center flex-1 gap-0 lg:gap-5 w-full minh-h-screen pt-10 sm:pt-16 ">
            { pathName==='/'&& <CarouselAnime />}
            <ContainerTitle >
                <TitleContent title="อนิเมะล่าสุด" />
            </ContainerTitle>
            <ContainerAnime>            
                {animeList?.map((anime:animeType) => <CardAnime key={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
            </ContainerAnime>
            <Pagination />

        </main>
    );
}