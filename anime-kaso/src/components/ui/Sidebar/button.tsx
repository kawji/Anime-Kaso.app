import Link from "next/link";
import clsx from "clsx";

type Props ={
    section:string
    path:string
    status:boolean
}

export default function ButtonSidebar({ section, path, status }:Props ) {
    return(
        <div className="w-full h-auto flex items-center pl-10 ">
            <Link className={clsx('px-2 py-1 rounded-md text-[14px] font-light leading-relaxed hover:bg-white/15 cursor-pointer',status&&'bg-white/20')} href={path} >
                {section}
            </Link>
        </div>
    );
}