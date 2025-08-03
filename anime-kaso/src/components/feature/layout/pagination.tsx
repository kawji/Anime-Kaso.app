'use client'
import { useSearchParams } from "next/navigation";
import ButtonPagination from "@/components/ui/pagination/buttonPagi";


export default function Pagination() {
    const searchParams = useSearchParams();
    const page = Number( searchParams.get('page') || 1 )
    
    return(
        <nav className="w-auto h-auto lg:h-15 bg-gray-400/25 flex items-center gap-4 px-6 py-4 rounded-md  " >
            <ButtonPagination page={1} />
            <ButtonPagination page={2} />
            <ButtonPagination page={3} />
            <ButtonPagination page={4} />

        </nav>
    );
}