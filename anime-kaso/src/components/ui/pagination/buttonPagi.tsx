'use client'
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { mapPath } from "@/config/mapPath";
import { usePathname } from "next/navigation";

type Props = {
    page:number;
    pageCurrent:number;
    content: number | string;
}
type MapPathName = keyof typeof mapPath;

export default function ButtonPagination({ page ,pageCurrent ,content }:Props) {
    const router = useRouter();
    const [show ,setShow] = useState(true);
    const pathname = usePathname();
    const name = pathname as MapPathName;
    const gotoPage = () => {
        router.push(`${name}?page=${page}`);
    }


    return(
        <button onClick={gotoPage} className={clsx("px-4 py-2.5 rounded-sm bg-[#161515] cursor-pointer hover:bg-white/40 hover:text-gray-900 transition-colors "
            ,pageCurrent===page? 'bg-white/80 text-black/85 text-[15px]':'text-white/75 text-sm' 
        )}>
            {content }
        </button>
    );
}