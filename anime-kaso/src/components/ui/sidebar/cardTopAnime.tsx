import { Eye } from "lucide-react";

type Props = {
    title:string;
    watch:number;
    png:string;
}

export default function CardTopAnime({ title ,watch ,png }:Props) {
    return(
        <div className="lg:px-2 px-5 flex gap-2 rounded-lg group cursor-pointer mb-2 w-full hover:bg-black/20 p-5 transition-all lg:hover:bg-black/2 " >
            <img src={png} alt="anime top" className="aspect-[3/4] w-[90px] h-full object-cover rounded-md " />
            <div className="flex flex-col gap-3 w-full lg:w-18 text-white" >
                <p className=" font-medium text-[13px] line-clamp-5 group-hover:text-white/70 transition-all "> {title} </p>
                <span className="px-1 py-0.5 text-[13px] flex items-center max-w-[200px] justify-center border border-white/75 bg-[#212020] rounded-md gap-2 transition group-hover:text-white/70 " >
                    <Eye size={21} className="shrink-0" />
                    {watch}
                </span>
            </div>
        </div>
    );
}