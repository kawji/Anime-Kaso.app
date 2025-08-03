// ui
'use client'
import TitleContent from "@/components/ui/main-content/main-anime/titleContent";
import ContainerAnime from "@/components/ui/main-content/main-anime/containerAnime";
import CardAnime from "@/components/ui/main-content/main-anime/cardAnime";
import ContainerTitle from "@/components/ui/main-content/main-anime/containerTitle";
import CarouselAnime from "./carouselAnime";
import Pagination from "./pagination";
import { usePathname } from "next/navigation";

export default function MainContent() {
    const pathName = usePathname();
    return(
        <main className="flex flex-col items-center flex-1 gap-0 lg:gap-5 w-full minh-h-screen pt-10 sm:pt-16 ">
            { pathName==='/'&& <CarouselAnime />}
            <ContainerTitle >
                <TitleContent title="อนิเมะล่าสุด" />
            </ContainerTitle>
            <ContainerAnime>            
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
                <CardAnime />
            </ContainerAnime>
            <Pagination />

        </main>
    );
}