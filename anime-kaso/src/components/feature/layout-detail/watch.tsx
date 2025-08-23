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
        <div className="w-full h-auto flex flex-col bg-blue-800/0 p-[40px] gap-5 ">
            <h1 className="flex items-center justify-start text-[26px] font-bold ">ช่องทางการรับชม</h1>
            <div className="flex items-center w-full h-auto py-5 pr-5  " > 
                <div className={clsx("flex p-0 bg-white/0 gap-5 w-full h-auto lg:max-h-[150px] " ,platformList.length > 0 ? '' : 'justify-center items-center')} >
                {platformList.length > 0 ?  platformList?.map((platform) => <IconWatch tagIcon={<platform.pathname />} name={platform.name} />) : <h2 className="text-white/75 text-lg font-light leading-relaxed tracking-wide ">ไม่พบช่องทางการรับชม</h2>  }





{/* 
                    <span className="shrink-0 p-5 bg-white/7 cursor-pointer hover:bg-white/15 transition-colors hover:opacity-85 "><YouTube /></span> */}

                </div>

            </div>
        
        </div>
    );
}