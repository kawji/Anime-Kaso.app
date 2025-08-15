'use client'
import { useEffect } from "react";
import { useGetDetail } from "@/hooks/useGetDetail";
import { Tv } from 'lucide-react';
import ImageAnime from "@/components/ui/detail-anime/imageAnime";
import DetailAnime from "@/components/ui/detail-anime/detail";
import {use} from 'react'
type DetailProps = {

    id:string;
   
}
export default function Anime({id}:DetailProps) {

    const { data, isLoading ,isError } = useGetDetail(id);
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    },[data]);

    return(
        <div className="flex m-[40px]  mt-15 w-full h-auto bg-blue-950/0 gap-15 ">
            <ImageAnime png='/anime-test.jpg' />
            <DetailAnime title={data?.title?? 'Anime Loading....'} sub_title={''} discliption={''}  />

        </div>
    );
}