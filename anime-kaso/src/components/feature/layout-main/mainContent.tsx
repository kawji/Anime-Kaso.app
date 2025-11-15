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
import { sidebarMenu } from "@/config/sidebarMenu";

type TypeMapPath = keyof typeof mapPath

export default function MainContent() {
    const {pageNumber ,pageName} = usePathPagination()
    const name = pageName as TypeMapPath
    const pageTitle = sidebarMenu.filter( (page) => page.path === pageName )
    const {data:animeList, isLoading, isError } = useAnimeList(mapPath[name](pageNumber));
    return(
        <main className="flex flex-col items-center  lg:pl-[5vw] flex-1 gap-4 lg:gap-6 w-full min-h-screen pt-10 sm:pt-16 bg-[#101010] ">
            <CarouselAnime />
            <div className="w-full h-auto lg:w-max-[70vw] lg:w-[88%] px-0 py-2 lg:border border-white/7 rounded-2xl shadow-white flex flex-col items-center gap-5 ">
                <ContainerTitle key={'con'} >
                    {isLoading? 
                    <div className="flex flex-col gap-3 items-start">
                    <Skeleton width="w-[350px]" height="h-[43px]" rounded="rounded-md" key='loadingTitle' />
                    <Skeleton width="w-[150px]" height="h-[30px]" rounded="rounded-md" key='loadingsubTitle' />

                    </div> : <TitleContent title={ pageTitle? pageTitle[0].title :"อนิเมะล่าสุด"} />}
                </ContainerTitle>

                <ContainerAnime>            
                    {isLoading? Array.from({length:24}).map((_,i)=> <Skeleton width="w-[200px]" height="h-[255px]" rounded="rounded-lg" key={`loadingAnimeList${i+1}`} />) : animeList?.data.map((anime:TypeAnime, index:number) => <CardAnime key={`${pageName}-${pageNumber}-${anime.mal_id}-${index}`} id={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
                </ContainerAnime>
            </div>


            {isLoading? <Skeleton width="w-[150px]" height="h-[25px]" rounded="rounded-md" key='loadingPagination' /> : <Pagination />}
        
        
        </main>
    );
}