'use client'
import { useSearchParams } from "next/navigation";
import ButtonPagination from "@/components/ui/pagination/buttonPagi";
import { useEffect, useState } from "react";


export default function Pagination() {
    const searchParams = useSearchParams();
    const [page ,setPage] = useState(1);

    useEffect(() => {
        setPage(Number(searchParams.get('page') || 1))
    },[searchParams])
    
    return(
        <nav className="w-auto h-auto lg:h-15 bg-gray-400/25 flex items-center gap-4 px-6 py-4 rounded-md  " >
            {[page,page+1,page+2,page+3].map((item)=><ButtonPagination page={item} pageCurrent={page} /> )}
            

        </nav>
    );
}