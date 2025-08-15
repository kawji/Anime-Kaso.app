'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Detail from "@/components/feature/layout-detail/detail";

type AnimeProps = {
  params: {
    id:string
  }
}

export default function AnimeAll({params}:AnimeProps ) {
    const { id } = params;

    return (
    <div className="mt-10 sm:mt-16 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
      <Detail id={id ?? '' }  />


    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'