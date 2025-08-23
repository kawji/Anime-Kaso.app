'use client'
import { useGetDetail } from "@/hooks/useGetDetail";
import ImageAnime from "@/components/ui/detail-anime/imageAnime";
import DetailAnime from "@/components/ui/detail-anime/detail";
import { AnimeData } from "@/config/animeData";
import { useEffect } from "react";
import { TypeDataAnime } from "@/config/animeData";


type DetailProps = {
    id:string | number ;
}
export default function Anime({id}:DetailProps) {
    const numberId:number = Number(id);
    const { data, isLoading ,isError } = useGetDetail(numberId);
    const detail = AnimeData[numberId]
    
    

    useEffect(()=> {
        if(detail) {
            console.log('Detallll------------> ',detail)
        }
    },[detail])

    return(
        <div className="flex p-[40px]  mt-15 w-full h-auto bg-blue-950/0 gap-15 ">
            <ImageAnime png={data?.images.jpg.image_url?? ''} />
            <DetailAnime title={data?.title?? 'Anime Loading....'} season={detail?.season || null } sub_title={detail?.subtitleList || null} discliption={detail?.resume || null} />

        </div>
    );
}