'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function AnimeAll() {
    const { id } = useParams();
    useEffect(()=>{
        
    },[id])
    return (
    <div className="font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black flex-col " >

    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'