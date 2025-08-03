import Link from "next/link";
import clsx from "clsx";

type Props ={
    section:string
    path:string
    status:boolean
}

export default function ButtonSidebar({ section, path, status }:Props ) {
    return(
        <div className="w-full h-auto flex items-center ">
            <Link className={clsx('px-2 py-1 rounded-md text-[14px] font-light leading-relaxed hover:bg-white/15 cursor-pointer',status?'bg-white/20 text-white/95':'bg-white/0 text-white/65')} href={path} >
                {section}
            </Link>
        </div>
    );
}