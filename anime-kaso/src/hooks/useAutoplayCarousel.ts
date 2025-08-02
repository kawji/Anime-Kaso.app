
import { useRef ,useEffect } from "react";

export default function useAutoplayCarousel( next:()=>void ,index:number ,delay=8000 ) {
    const timeoutRef = useRef< NodeJS.Timeout | null >(null)

    const resetTime = () => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
    }
    const startAutoplay = () => {
        timeoutRef.current = setTimeout(() => {
            next();
        },delay)
    }

    useEffect(() => {
        resetTime();
        startAutoplay()

        return resetTime;

    },[index])

    const pause = resetTime;

    return { startAutoplay ,pause }
}