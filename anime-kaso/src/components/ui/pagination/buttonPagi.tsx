'use client'
import { useRouter ,useSearchParams } from "next/navigation";
import clsx from "clsx";

type Props = {
    page:number;
}

export default function ButtonPagination({ page }:Props) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageCurrent = Number(searchParams.get('page') || 1)
    const gotoPage = () => {
        router.push(`/anime?page=${page}`);
    }

    return(
        <button onClick={gotoPage} className={clsx("px-4 py-2.5 rounded-sm bg-[#161515] text-sm cursor-pointer hover:bg-white/60 hover:text-gray-900 transition-colors "
            ,pageCurrent===page? 'bg-white/80 text-black/85':'text-white/75' 
        )}>
        {page}
    </button>
    );
}