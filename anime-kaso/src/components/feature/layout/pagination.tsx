'use client'
import ButtonPagination from "@/components/ui/pagination/buttonPagi";
import { ButtonShort } from "@/components/ui/pagination/buttonShort";
import { usePagination } from "@/hooks/usePagination";
import { Skeleton } from "@/components/ui/system/skeleton";

export default function Pagination() {
    const {page  ,pageLast ,pageList ,isLoadingLast} = usePagination()
    
    return(
        <nav className="max-w-[70vw] ml-0 mt-8 w-[88%] h-auto lg:h-15 gap-4 bg-[#161515] border-white/25 border flex items-center justify-center px-6 py-4 rounded-md  " >
            { page > 1 && <ButtonPagination page={page-1} pageCurrent={page} content={'Prev'} key='prevPage' /> }
            {page > 5 && 
            <span className="flex justify-center items-center ">
                <ButtonPagination page={1} pageCurrent={page} content={1} key='firstPage' />
            </span>}

            {page>6 &&<ButtonShort />}

            <div className="flex items-center justify-center gap-4 h-full " >
                {pageList.map((item) => <ButtonPagination page={item} pageCurrent={page} key={item} content={item} /> )}
            </div>   

            {page < pageLast - 5 &&  <ButtonShort /> }
            {page < pageLast - 4 &&             
            
            <span className="flex justify-center items-center ">
                {isLoadingLast? <Skeleton width="w-10" height="h-10" rounded="rounded-md" />:<ButtonPagination page={pageLast} pageCurrent={page} content={pageLast} key='lastPage' />}
            </span> }

    
            { page < pageLast &&<ButtonPagination page={page+1} pageCurrent={page} content={'Next'} key='nextPage' />}

                  
        </nav>
    );
}