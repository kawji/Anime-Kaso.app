'use client'
import { useGetDetail } from "@/hooks/useGetDetail";
import ImageAnime from "@/components/ui/detail-anime/imageAnime";
import DetailAnime from "@/components/ui/detail-anime/detail";
type DetailProps = {
    id:string | number ;
}
export default function Anime({id}:DetailProps) {
    const NumberId:number = Number(id);
    const { data, isLoading ,isError } = useGetDetail(NumberId);
    console.log('Data ---------====>',data)

    return(
        <div className="flex p-[40px]  mt-15 w-full h-auto bg-blue-950/0 gap-15 ">
            <ImageAnime png={data?.images.jpg.image_url?? ''} />
            <DetailAnime title={data?.title?? 'Anime Loading....'}   />

        </div>
    );
}