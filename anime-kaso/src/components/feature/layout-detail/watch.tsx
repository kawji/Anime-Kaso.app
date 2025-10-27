import IconWatch from "@/components/ui/detail-anime/iconWatch";
import clsx from "clsx";
import YouTube from "@/components/ui/icons/youTube";
import { AnimeData } from "@/config/animeData";
import { mapPlatform } from "@/config/mapPlatformList";
import { recordPlatform } from "@/config/mapPlatformList";
import { KeyPlatformList } from "@/config/mapPlatformList";



import Netflix from "@/components/ui/icons/netflix";
type PropsWatch = {
    id :string | number;
}

export default function Watch({ id }:PropsWatch) {
    const numberId = Number(id);
    const keyPlatform:KeyPlatformList[] = AnimeData[numberId]?.platformList || [] ;
    const platformList = keyPlatform.map( (k) => mapPlatform[k] )

    console.log("plat form --->",platformList)
    return(
        <div className="w-full h-auto flex flex-col bg-blue-800/0 pl-[40px] pt-[40px] gap-5 ">
            <h1 className="flex items-center justify-start text-2xl md:text-[26px] font-bold ">ช่องทางการรับชม</h1>
            <div className="relative w-full h-auto py-5 overflow-hidden " > 
                <div className={clsx("flex p-0 gap-5 w-full h-auto max-h-[100px] lg:max-h-[150px] overflow-x-auto scrollbar-hide " ,platformList.length > 0 ? '' : 'justify-center items-center')} >
                    {platformList.length > 0 ?  platformList?.map((platform,i) => <IconWatch tagIcon={<platform.pathname />}  key={platform.name + i} name={platform.name} url={platform.url} />) : <h2 className="text-white/75 text-lg font-light leading-relaxed tracking-wide ">ไม่พบช่องทางการรับชม</h2>  }
                    <div className=" pointer-events-none absolute right-0 top-0 h-full w-18 bg-gradient-to-l from-black to-transparent z-10" />
                </div>

            </div>
        
        </div>
    );
}