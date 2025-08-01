// ui
import TitleContent from "@/components/ui/main-content/main-anime/titleContent";
import ContainerAnime from "@/components/ui/main-content/main-anime/containerAnime";
import CardAnime from "@/components/ui/main-content/main-anime/cardAnime";
import CarouselAnime from "@/components/ui/main-content/carousel/carouselAnime";

export default function MainContent() {
    return(
        <main className="flex flex-col flex-1 gap-5 lg:gap-12 w-full minh-h-screen">
            <CarouselAnime />
            <TitleContent title="อนิเมะล่าสุด" />
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
        </main>
    );
}