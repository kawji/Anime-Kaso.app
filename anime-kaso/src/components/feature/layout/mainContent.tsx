// ui
'use client'
import TitleContent from "@/components/ui/main-content/main-anime/titleContent";
import ContainerAnime from "@/components/ui/main-content/main-anime/containerAnime";
import CardAnime from "@/components/ui/main-content/main-anime/cardAnime";
import ContainerTitle from "@/components/ui/main-content/main-anime/containerTitle";
import CarouselAnime from "./carouselAnime";
import Pagination from "./pagination";
import { useAnimeList } from "@/hooks/useAnimeList";
import { TypeAnime } from "@/type/TypeAnime";
import { usePathPagination } from "@/hooks/usePathPagination";
import { Skeleton } from "@/components/ui/system/skeleton";

export default function MainContent() {
    const {pageNumber ,pageName} = usePathPagination()
    console.log('Page Name ==>',pageName);
    const {data: animeList, isLoading, isError } = useAnimeList(pageNumber ,pageName);
    
    console.log('loading ==>',isLoading);
    console.log('Error ==>',isError);
    console.log('Data Anime ==>',animeList);
    console.log('Pages ==>',pageNumber);

    return(
        <main className="flex flex-col items-center flex-1 gap-0 lg:gap-5 w-full minh-h-screen pt-10 sm:pt-16 bg-[#101010] ">
            { pageName==='/'&& <CarouselAnime />}
            <ContainerTitle >
                {isLoading? <Skeleton width="w-[350px]" height="h-[75px]" rounded="rounded-md" key='loadingTitle' /> : <TitleContent title="อนิเมะล่าสุด" />}
            </ContainerTitle>
            <ContainerAnime>            
                {isLoading? <Skeleton width="w-full" height="h-[725px]" rounded="rounded-lg" key='loadingAnimeList' /> : animeList?.data.map((anime:TypeAnime) => <CardAnime key={anime.mal_id} id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
            </ContainerAnime>
            {isLoading? <Skeleton width="w-[150px]" height="h-[25px]" rounded="rounded-md" key='loadingPagination' /> : <Pagination />}

        </main>
    );
}