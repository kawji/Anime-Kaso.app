'use client'
import SlideCarousel from "./slideCarousel";
import { AnimatePresence ,motion } from "motion/react";
import { guideAnimeMenu } from "@/config/guideAnimeMenu";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ArrowBigLeftDash ,ArrowBigRightDash  } from 'lucide-react';


export default function CarouselAnime() {
    const [index,setIndex] = useState(0);
    const [valueAnimate,setValueAnimate] = useState(1);

    // auto play
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const cardCarouselRef = useRef<HTMLDivElement>(null);

    const resetTime = () => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    useEffect(()=> {
        resetTime()
        timeoutRef.current = setTimeout(()=>{
            next();
        },8000)
    },[index])


    const next = ()=> {
        setValueAnimate(1)
        setIndex((prev)=> (prev+1) %3 );
        resetTime()
    }

    const prev = () => {
        setValueAnimate(-1)
        setIndex((prev) => (prev - 1 + guideAnimeMenu.length) % 3 );
        resetTime()
    }

    const hoverCarousel = () => {
        resetTime()
    }
    const leaveHoverCarousel = () => {
        timeoutRef.current = setTimeout(()=> {
            next();
        },8000)
    }


    return(
            <div 
                ref={cardCarouselRef}
                className="relative w-full  h-[40vh] lg:h-[65vh] group " 
                onMouseEnter={hoverCarousel}
                onMouseLeave={leaveHoverCarousel}    
            >
                <AnimatePresence>
                    <motion.div
                    key={index}
                    initial={{ x:valueAnimate > 0 ? 1000:-1000 ,y:0 ,opacity:0 }}
                    animate={{x:0 ,y:0,opacity:1}}
                    exit={{ x:valueAnimate > 0 ? -1000:1000,y:0,opacity:0 }}
                    transition={{duration:2 ,ease: "easeInOut"}}
                    className="absolute w-full h-full"
                    >
                        <SlideCarousel title={guideAnimeMenu[index].title} subtitles={guideAnimeMenu[index].subtitle} chapter={guideAnimeMenu[index].chapter} path={guideAnimeMenu[index].path} />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute h-full flex items-center left-5 top-0 opacity-0 group-hover:opacity-95 transition-all ">
                    <button onClick={()=> prev()} className="p-3 text-white/85 cursor-pointer rounded-xl transition-all hover:scale-95 hover:text-[var(--color-primary)] ">
                        <ArrowBigLeftDash size={40} />
                    </button>
                </div>
                <div className="absolute h-full flex items-center right-5 top-0 opacity-0 group-hover:opacity-95 transition-all ">
                    <button onClick={()=> next()} className="p-3  text-white/85 cursor-pointer rounded-xl transition-all hover:scale-95 hover:text-[var(--color-primary)] ">
                        <ArrowBigRightDash size={40} />
                    </button>
                </div>

            </div>
          );
}