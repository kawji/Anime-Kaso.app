import Link from "next/link";
import clsx from "clsx";

type Props ={
    section:string
    path:string
    status:boolean
}

export default function ButtonSidebar({ section, path, status }:Props ) {
    return(
        <div className="w-full h-auto flex justify-start ">
            <Link className={clsx('lg:px-2 px-5 w-full lg:w-auto py-1 rounded-md text-md lg:text-[14px] font-light leading-relaxed hover:bg-white/15 cursor-pointer',status?'bg-white/20 text-white/95':'bg-white/0 text-white/65')} href={path} >
                {section}
            </Link>
        </div>
    );
}