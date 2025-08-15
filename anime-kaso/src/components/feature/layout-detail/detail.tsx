import { useEffect } from "react";
import { useGetDetail } from "@/hooks/useGetDetail";
import { Tv } from 'lucide-react';
import ImageAnime from "@/components/ui/detail-anime/imageAnime";
type DetailProps = {
    id:string;
}


export default function Detail({id}:DetailProps) {
    const { data, isLoading ,isError } = useGetDetail(id);
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    },[data]);

    return(
        <div className="flex m-[40px]  mt-15 w-full h-auto bg-blue-950/0 gap-15 ">
            <ImageAnime png='/anime-test.jpg' />
            <div className="flex-1 shrink-0 pt-5 w-full max-w-[60vw] bg-black/0 flex flex-col gap-1.5 " >
                <h1 className="lg:text-3xl font-bold  " >Solo Leveling</h1>
                <h4 className=" lg:text-2xl font-bold text-white/50" >Season  1</h4>
                <div  className="flex gap-5 justify-start items-center h-auto w-auto mt-3 ">
                    <span className="flex justify-center items-center px-4 py-1 text-[13px] text-white/95 rounded-sm border-1 border-white/50 bg-white/5 " >ซับไทย</span>
                    <span className="flex justify-center items-center px-4 py-1 text-[13px] text-white/95 rounded-sm border-1 border-white/50 bg-white/5 " >ซับไทย</span>
                    <span className="flex justify-center items-center px-4 py-1 text-[13px] text-white/95 rounded-sm border-1 border-white/50 bg-white/5 " >ซับไทย</span>

                </div>
                <div>
                    <button className=" cursor-pointer hover:bg-white/85 transition-colors px-10 py-2.5 rounded-full mt-7 bg-white text-black flex items-center gap-4 font-light lg:text-[17px] " >
                        <Tv /> รับชมตอนนี้
                    </button>
                </div>
                <div>
                    <p className="text-[15px] text-white/80 font-light mt-3 lg:mt-5 leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora. Quisquam, doloremque. Voluptatum, repellendus. Quibusdam, asperiores. Doloribus, accusantium. Eaque, minima. Necessitatibus, explicabo. Ratione, delectus. Quasi, fugit. Voluptates, distinctio. Nihil, pariatur.
                    </p>
                </div>
            
            
            </div>
        </div>
    );
}