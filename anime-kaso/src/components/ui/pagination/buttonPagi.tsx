'use client'
import { useRouter ,useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

type Props = {
    page:number;
    pageCurrent:number;
}

export default function ButtonPagination({ page ,pageCurrent }:Props) {
    const router = useRouter();
    const [show ,setShow] = useState(true);

    const gotoPage = () => {
        router.push(`/anime?page=${page}`);
    }


    return(
        <button onClick={gotoPage} className={clsx("px-4 py-2.5 rounded-sm bg-[#161515] text-sm cursor-pointer hover:bg-white/40 hover:text-gray-900 transition-colors "
            ,pageCurrent===page? 'bg-white/80 text-black/85':'text-white/75' 
        )}>
        {page >= pageCurrent ? page - 3 == pageCurrent? '>': page  : page+3 == pageCurrent ? '<' : page  }
    </button>
    );
}