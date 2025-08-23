
import { Tv } from "lucide-react";

type DetailProps = {
    title:string;
    season:string | null;
    sub_title:string[] | null;
    discliption:string | null;
}

export default function DetailAnime({title ,season ,sub_title ,discliption}:DetailProps) {
    return(
        
        <div className="flex-1 shrink-0 pt-5 w-full max-w-[60vw] bg-black/0 flex flex-col gap-1.5 " >
        <h1 className="lg:text-3xl font-bold  " >{title}</h1>
        <h4 className=" lg:text-2xl font-bold text-white/50" >{season?? 'Season ---'}</h4>
        <div  className="flex gap-5 justify-start items-center h-auto w-auto mt-3 ">
            {sub_title?.map((sub) =>  <span className="flex justify-center items-center px-4 py-1 text-[13px] text-white/95 rounded-sm border-1 border-white/50 bg-white/5 " > {sub} </span>)}
        </div>
        <div>
            <button className=" cursor-pointer hover:bg-white/85 transition-colors px-10 py-2.5 rounded-full mt-7 bg-white text-black flex items-center gap-4 font-light lg:text-[17px] " >
                <Tv /> รับชมตอนนี้
            </button>
        </div>
        <div>
            <p className="text-[15px] text-white/80 font-light mt-3 lg:mt-5 leading-7">
                {discliption ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora. Quisquam, doloremque. Voluptatum, repellendus. Quibusdam, asperiores. Doloribus, accusantium. Eaque, minima. Necessitatibus, explicabo. Ratione, delectus. Quasi, fugit. Voluptates, distinctio. Nihil, pariatur.'}
            </p>
        </div>
    
    
    </div>
    );
}