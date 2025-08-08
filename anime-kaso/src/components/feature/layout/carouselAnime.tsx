'use client'
import SlideCarousel from "@/components/ui/main-content/carousel/slideCarousel";
import { useState } from "react";
import useAutoplayCarousel from "@/hooks/useAutoplayCarousel";
import { guideAnimeMenu } from "@/config/guideAnimeMenu";
import { AnimatePresence ,motion } from "motion/react";
// icons
import { ArrowBigLeftDash ,ArrowBigRightDash } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';


export default function CarouselAnime() {
    const [index,setIndex] = useState(0);
    const [valueAnimate,setValueAnimate] = useState(1);

    const next = ()=> {
        setValueAnimate(1)
        setIndex((prev)=> (prev+1) %3 );
        pause()
    }

    const prev = () => {
        setValueAnimate(-1)
        setIndex((prev) => (prev - 1 + guideAnimeMenu.length) % 3 );
        pause
    }

    const { startAutoplay ,pause } = useAutoplayCarousel(next,index);


    return(
            <div 
                className="relative w-[80%] h-[40vh] lg:h-[54vh] group mt-10 overflow-hidden border-white/20 border rounded-2xl " 
                onMouseEnter={pause}
                onMouseLeave={startAutoplay}    
            >
                <AnimatePresence>
                    <motion.div
                    key={index}
                    initial={{ x:valueAnimate > 0 ? 1000:-1000 ,y:0  }}
                    animate={{x:0 ,y:0,opacity:1}}
                    exit={{ x:valueAnimate > 0 ? -1200:1200,y:0 ,opacity:0.7 ,scale:0.8 }}
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
                    <button onClick={()=> next()} className="p-3  text-white/85 cursor-pointer rounded-xl transition-all hover:scale-95 hover:text-[var(--color-primary)] outline-none ">
                        <ArrowBigRightDash size={40} />
                    </button>
                </div>

            </div>
          );
}