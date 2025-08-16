'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLastPagination } from "@/hooks/useLastPagination";
import { mapPath } from "@/config/mapPath";
import { usePathname } from "next/navigation";

type MapPathKey = keyof typeof mapPath;

export function usePagination() {
        const searchParams = useSearchParams();
        const [page ,setPage] = useState<number>(1);
        const pathname = usePathname();
        const name = pathname as MapPathKey;
        const { data ,isLoading ,isError } = useLastPagination(mapPath[name](page));
        const pageLast = data?.pagination?.last_visible_page ?? 1
        // const { oneMachine } = viewPort();
        console.log('ชื่อ path ------------> ',name )

        useEffect(() => {
            setPage(Number(searchParams.get('page') || 1))
        },[searchParams])

        const pageList = [  page-3 ,page-2 ,page-1 ,page ,page+1 ,page+2 ,page+3 ,page+4   ].filter((p) => p >= 1 && p <= pageLast );


        return {page  ,pageLast ,pageList ,isLoadingLast:isLoading ,isErrorLast:isError }
}

// const handleResize = () => {
//     const width = window.innerWidth;
//     if (width < 480) setMaxVisiblePages(1);     // มือถือ
//     else if (width < 768) setMaxVisiblePages(3); // tablet
//     else setMaxVisiblePages(5);                  // desktop
//   };