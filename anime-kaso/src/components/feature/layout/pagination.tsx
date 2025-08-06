'use client'
import ButtonPagination from "@/components/ui/pagination/buttonPagi";
import { usePagination } from "@/hooks/usePagination";

export default function Pagination() {
    const {page  ,pageLast ,pageList} = usePagination()
    
    return(
        <nav className="max-w-[70vw] lg:ml-[80px] sm:ml-[45px] ml-4 w-[88%] h-auto lg:h-15 bg-[#161515] border-white/25 border flex items-center justify-center gap-4 px-6 py-4 rounded-md  " >
            {pageList.map((item)=><ButtonPagination page={item} pageCurrent={page} key={item} /> )}
        </nav>
    );
}