import { usePathname ,useSearchParams } from "next/navigation";
import { useEffect ,useState } from "react";


export function usePathPagination() {

    const pathName = usePathname();
    const searchParams = useSearchParams()
    const [page ,setPage] = useState<number>(1);
    
    useEffect(()=> {
        const paginationPage = Number(searchParams.get('page') || 1)
        setPage(paginationPage);
    },[searchParams ,pathName])

    return {pageNumber:page ,pageName:pathName}


}