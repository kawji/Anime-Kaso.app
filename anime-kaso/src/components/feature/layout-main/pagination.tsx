'use client'
import ButtonPagination from "@/components/ui/pagination/buttonPagi";
import { ButtonShort } from "@/components/ui/pagination/buttonShort";
import { usePagination } from "@/hooks/usePagination";
import { Skeleton } from "@/components/ui/system/skeleton";
import { viewPort } from "@/utils/viewport";
import clsx from "clsx";

export default function Pagination() {
    const {page  ,pageLast ,pageList ,isLoadingLast} = usePagination()
    const { oneMachine } = viewPort()
    const view = oneMachine()


    return(
        <nav className={clsx("lg:max-w-[70vw] lg:w-[88%] w-[95%] ml-0 mt-8 h-auto lg:h-15 bg-[#161515] border-white/25 border flex items-center justify-center px-6 py-4 rounded-md ", view?.desktop &&'gap-4' ,view?.tablet && 'gap-2' ,view?.phone && 'gap-0')} >
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