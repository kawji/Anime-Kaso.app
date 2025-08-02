import { Eye } from "lucide-react";

type Props = {
    title:string;
    watch:string;
    path:string;
}

export default function CardTopAnime({ title ,watch ,path }:Props) {
    const fullPath = `/top-anime/${path}`
    return(
        <div className=" flex gap-2 rounded-lg group cursor-pointer " >
            <img src={fullPath} alt="anime top" className="aspect-[3/4] w-[120px] h-full object-cover rounded-md " />
            <div className="flex flex-col gap-3 w-full lg:w-18" >
                <p className=" font-medium text-[14px] line-clamp-5 group-hover:text-white/70 transition-all "> {title} </p>
                <span className="px-0 py-0.5 text-[13px] flex items-center justify-center border border-white/75 bg-[#212020] rounded-md gap-2 transition group-hover:text-white/70 " >
                    <Eye size={21} />
                    {watch}
                </span>
            </div>
        </div>
    );
}