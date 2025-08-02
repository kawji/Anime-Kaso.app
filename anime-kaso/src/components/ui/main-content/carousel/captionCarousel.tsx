'use client'
import DetailCarousel from "./detailCarousel";
import ButtonCarousel from "./buttonCarousel";
import { guideAnimeDetailType } from "@/type/guideAnime";


export default function CaptionCarousel({ title ,subtitles ,chapter }:guideAnimeDetailType) {
    return(
        <figcaption className="flex absolute right-0 bottom-0 w-[75%] h-[28%] bg-black/50 backdrop-blur-[4px] rounded-tl-2xl shadow-lg shadow-blue-500 " >
            <DetailCarousel title={title} subtitles={subtitles} chapter={chapter} />
            <ButtonCarousel />
        </figcaption>
    );
}