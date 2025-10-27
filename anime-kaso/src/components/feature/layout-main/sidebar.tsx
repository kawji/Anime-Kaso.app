'use client'
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/config/sidebarMenu";
// ui
import ButtonSidebar from "@/components/ui/sidebar/button";
import TitleSidebar from "@/components/ui/sidebar/title";
import CardTopAnime from "@/components/ui/sidebar/cardTopAnime";
import { useAnimePopula } from "@/hooks/useAnimePopula";
import { TypeAnime } from "@/type/TypeAnime";

export default function Sidebar() {
    let namePath = usePathname();
    const { data:animeList ,isLoading ,isError} = useAnimePopula(10);

    return(
        <aside  className=" p-5 lg:pb-0 lg:pl-10 flex flex-col gap-8 lg:gap-15 left-0 shrink-0 shadow-sm shadow-white/30 items-center lg:items-start w-full lg:w-[260px] lg:pt-[var(--start-top)] pl-[var(--start-left)] min-h-screen bg-[#131313] relative z-99 ">
            <div className="flex flex-col items-start gap-2 shrink-0 w-full p-5 rounded-xl border border-white/20 lg:p-0 lg:border-none" >
                <TitleSidebar title='หมวดหมู่' />
                {sidebarMenu.map((item) =>{
                    return <ButtonSidebar key={item.path} section={item.section} path={item.path} status={item.path===namePath? true:false} /> 
                })}
            </div>
            <div className="flex flex-col gap-5 lg:gap-0 shrink-0 lg:pr-0.5 w-full items-start p-5 rounded-xl border border-white/20 lg:p-0 lg:border-none" >
                <TitleSidebar title="อนิเมะมาแรง" />
                {animeList?.data.map((anime:TypeAnime) => <CardTopAnime title={anime.title} watch={anime.favorites} png={anime.images.jpg.image_url} key={anime.mal_id} />)}
            </div>

        </aside>
    );
}