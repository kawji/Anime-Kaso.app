'use client'
import SlideCarousel from "@/components/ui/main-content/carousel/slideCarousel";
import { useState } from "react";
import useAutoplayCarousel from "@/hooks/useAutoplayCarousel";
import { guideAnimeMenu } from "@/config/guideAnimeMenu";
import { AnimatePresence ,motion } from "motion/react";
// icons
import { ArrowBigLeftDash ,ArrowBigRightDash } from "lucide-react";

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
                className="w-full  relative lg:max-w-[70vw] sm:w-[88%] h-[40vh] lg:h-[54vh] group sm:mt-10 overflow-hidden border-white/20 sm:border rounded-none sm:rounded-2xl " 
                onMouseEnter={pause}
                onMouseLeave={startAutoplay}
                key={index+1}    
            >
                <AnimatePresence key={index+2}>
                    <motion.div
                    key={index+3}
                    initial={{ opacity:0  }}
                    animate={{opacity:1}}
                    exit={{ opacity:0  }}
                    transition={{duration:0.5 ,ease: "easeInOut"}}
                    className="absolute w-full h-full"
                    >
                        <SlideCarousel key={index+4} title={guideAnimeMenu[index].title} subtitles={guideAnimeMenu[index].subtitle} chapter={guideAnimeMenu[index].chapter} path={guideAnimeMenu[index].path} />
                    </motion.div>
                </AnimatePresence>
                <div key={index+5} className="absolute h-full flex items-center left-5 top-0 opacity-0 group-hover:opacity-95 transition-all ">
                    <button key={index+6} onClick={()=> prev()} className="p-3 text-white/85 cursor-pointer rounded-xl transition-all hover:scale-95 hover:text-[var(--color-primary)] ">
                        <ArrowBigLeftDash size={40} />
                    </button>
                </div>
                <div key={index+7} className="absolute h-full flex items-center right-5 top-0 opacity-0 group-hover:opacity-95 transition-all ">
                    <button key={index+8} onClick={()=> next()} className="p-3  text-white/85 cursor-pointer rounded-xl transition-all hover:scale-95 hover:text-[var(--color-primary)] outline-none ">
                        <ArrowBigRightDash size={40} />
                    </button>
                </div>

            </div>
          );
}