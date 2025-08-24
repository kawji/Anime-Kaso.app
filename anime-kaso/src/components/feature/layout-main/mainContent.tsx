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
import { mapPath } from "@/config/mapPath";

type TypeMapPath = keyof typeof mapPath

export default function MainContent() {
    const {pageNumber ,pageName} = usePathPagination()
    const name = pageName as TypeMapPath

    const {data: animeList, isLoading, isError } = useAnimeList(mapPath[name](pageNumber));

    console.log('ISSSSSSSS LOADINF __>',isLoading)

    return(
        <main className="flex flex-col items-center flex-1 gap-0 lg:gap-6 w-full min-h-screen  pt-10 sm:pt-16 bg-[#101010] ">
            <CarouselAnime />
            <ContainerTitle >
                {isLoading? 
                <div className="flex flex-col gap-5 items-start">
                <Skeleton width="w-[350px]" height="h-[45px]" rounded="rounded-md" key='loadingTitle' />
                <Skeleton width="w-[150px]" height="h-[35px]" rounded="rounded-md" key='loadingTitle' />

                </div> : <TitleContent title="อนิเมะล่าสุด" />}
            </ContainerTitle>
            <ContainerAnime>            
                {isLoading? Array.from({length:25}).map((_,i)=> <Skeleton width="w-[200px]" height="h-[255px]" rounded="rounded-lg" key={`loadingAnimeList${i}`} />) : animeList?.data.map((anime:TypeAnime) => <CardAnime key={anime.mal_id} id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
            </ContainerAnime>
            {isLoading? <Skeleton width="w-[150px]" height="h-[25px]" rounded="rounded-md" key='loadingPagination' /> : <Pagination />}
        
        
        </main>
    );
}