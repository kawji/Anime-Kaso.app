'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Detail from "@/components/feature/layout-detail/detail";
export default function AnimeAll() {
    const { id } = useParams();
    useEffect(()=>{
        
    },[id])

    return (
    <div className="mt-10 sm:mt-16 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
      <Detail />


    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'