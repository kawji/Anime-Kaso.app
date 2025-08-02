'use client'

import Image from "next/image"

type Props = {
    path:string;
}

export default function ImageCarousel({ path }:Props) {
    const fullPath = `/carousel/${path}`
    return(
        <Image
            src={fullPath} 
            fill
            sizes="(max-width: 1024px)"
            className="w-full h-full object-cover group-hover:scale-104 transition-all duration-800 ease-in-out " 
            alt="carousel image"
        />
    );
}