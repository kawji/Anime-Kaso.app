'use client'
import SlideCarousel from "./slideCarousel";
// Import Swiper React components

import { guideAnimeMenu } from "@/config/guideAnimeMenu";

export default function CarouselAnime() {
    return(
            <div className="flex flex-col" >
                {guideAnimeMenu.map((item) => <SlideCarousel title={item.title} subtitles={item.subtitle} chapter={item.chapter} path={item.path} key={item.title} />)}
            </div>
          );
}