import React from "react"

type PropsIconWatch = {
    tagIcon:React.ReactNode;
    name:string;

}

export default function IconWatch({ tagIcon ,name }:PropsIconWatch ) {

    return(
        <div className="group px-5 py-3 rounded-lg bg-[#141414] flex gap-3.5 cursor-pointer hover:bg-[#141414d5] transition-all hover:opacity-97  " >
            <span className="rounded-sm shrink-0 p-3 bg-white/7 group-hover:opacity-80 flex justify-center itemscenter ">{tagIcon}</span>
            <span className="p-2 flex flex-col items-start group-hover:opacity-97 ">
                <h6 className="group-hover:opacity-97 group-hover:text-white/80 transition-all text-lg font-medium text-white/90 tracking-wider " >{name}</h6>
                <p className="group-hover:opacity-97 group-hover:text-white/60 transition-all text-[13px] font-medium text-white/70 tracking-wider " >Watch in {name} </p>
            </span>

        </div>
    )
}