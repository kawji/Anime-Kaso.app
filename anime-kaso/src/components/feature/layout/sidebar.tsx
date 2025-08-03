'use client'
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/config/sidebarMenu";
import { topAnimeList } from "@/config/topAnime";
import { v4 as uuidv4 } from 'uuid';
// ui
import ButtonSidebar from "@/components/ui/sidebar/button";
import TitleSidebar from "@/components/ui/sidebar/title";
import CardTopAnime from "@/components/ui/sidebar/cardTopAnime";


export default function Sidebar() {
    let namePath = usePathname();
    return(
        <aside  className="flex flex-col gap-15 left-0 shrink-0 shadow-sm shadow-white/30 rounded-br-2xl sm:w-[260px] pt-[var(--start-top)] pl-[var(--start-left)] min-h-screen bg-[#161515] relative z-99 ">
            <div className="flex flex-col gap-2 shrink-0" >
                <TitleSidebar title='หมวดหมู่' />
                {sidebarMenu.map((item) =>{
                    return <ButtonSidebar key={item.path} section={item.section} path={item.path} status={item.path===namePath? true:false} /> 
                })}
            </div>
            <div className="flex flex-col gap-5 shrink-0 pr-0.5" >
                <TitleSidebar title="อนิเมะมาแรง" />
                {topAnimeList.map((anime) => <CardTopAnime title={anime.title} watch={anime.watch} path={anime.path} key={uuidv4()} />)}
            </div>

        </aside>
    );
}