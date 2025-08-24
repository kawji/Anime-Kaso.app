'use client'
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/config/sidebarMenu";
// ui
import ButtonSidebar from "@/components/ui/Sidebar/button";
import TitleSidebar from "@/components/ui/Sidebar/title";
import CardTopAnime from "@/components/ui/Sidebar/cardTopAnime";
import { useAnimePopula } from "@/hooks/useAnimePopula";
import { TypeAnime } from "@/type/TypeAnime";

export default function Sidebar() {
    let namePath = usePathname();
    const { data:animeList ,isLoading ,isError} = useAnimePopula(10);

    return(
        <aside  className="flex flex-col gap-15 left-0 shrink-0 shadow-sm shadow-white/30 rounded-br-2xl sm:w-[260px] pt-[var(--start-top)] pl-[var(--start-left)] min-h-screen bg-[#131313] relative z-99 ">
            <div className="flex flex-col gap-2 shrink-0" >
                <TitleSidebar title='หมวดหมู่' />
                {sidebarMenu.map((item) =>{
                    return <ButtonSidebar key={item.path} section={item.section} path={item.path} status={item.path===namePath? true:false} /> 
                })}
            </div>
            <div className="flex flex-col gap-5 shrink-0 pr-0.5" >
                <TitleSidebar title="อนิเมะมาแรง" />
                {animeList?.data.map((anime:TypeAnime) => <CardTopAnime title={anime.title} watch={anime.favorites} png={anime.images.jpg.image_url} key={anime.mal_id} />)}
            </div>

        </aside>
    );
}