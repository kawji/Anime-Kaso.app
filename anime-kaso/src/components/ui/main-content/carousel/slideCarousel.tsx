'use client'
import { motion } from "motion/react";
// ui
import ImageCarousel from "./imageCarousel";
import CaptionCarousel from "./captionCarousel";
type Props = {
    title:string;
    subtitles:string;
    chapter:number;
    path:string;
}
export default function SlideCarousel({ title ,subtitles ,chapter ,path }:Props) {
    return(
        <figure className="relative w-full h-full  overflow-hidden group sm:rounded-2xl ">
            <ImageCarousel path={path} />
            <CaptionCarousel title={title} subtitles={subtitles} chapter={chapter} />
        </figure>
    );
}