// ui
import TitleContent from "@/components/ui/main-content/titleContent";
import ContainerAnime from "@/components/ui/main-content/containerAnime";
import CardAnime from "@/components/ui/main-content/cardAnime";

export default function MainContent() {
    return(
        <main className="flex flex-col flex-1 gap-5 lg:gap-15 w-full minh-h-screen pt-[var(--start-top)] pl-[var(--start-left)] ">
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