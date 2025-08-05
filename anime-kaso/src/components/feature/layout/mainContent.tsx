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

export default function MainContent() {
    const {pageNumber ,pageName} = usePathPagination()

    const {data: animeList, isLoading, isError } = useAnimeList(pageNumber);
    
    console.log('loading ==>',isLoading);
    console.log('Error ==>',isError);
    console.log('Data Anime ==>',animeList);
    console.log('Pages ==>',pageNumber);




    return(
        <main className="flex flex-col items-center flex-1 gap-0 lg:gap-5 w-full minh-h-screen pt-10 sm:pt-16 ">
            { pageName==='/'&& <CarouselAnime />}
            <ContainerTitle >
                <TitleContent title="อนิเมะล่าสุด" />
            </ContainerTitle>
            <ContainerAnime>            
                {animeList?.map((anime:TypeAnime) => <CardAnime key={anime.mal_id} png={anime.images.jpg.image_url} title={anime.title} favorites={anime.favorites} />)}
            </ContainerAnime>
            <Pagination />

        </main>
    );
}