'use client'

import Image from "next/image"

type Props = {
    path:string;
}

export default function ImageCarousel({ path }:Props) {
    const fullPath = `/carousel/${path}`
    return(
        <img
            src={fullPath} 
            className="w-full h-full object-cover group-hover:scale-104 transition-all duration-800 ease-in-out " 
            alt="carousel image"
        />
    );
}