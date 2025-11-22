'use client'
import clsx from "clsx";
import { Tv } from "lucide-react";
import { Share2 } from 'lucide-react';
import { useState ,useRef, useEffect } from "react";
import { Wrench } from 'lucide-react';


type DetailProps = {
    title:string;
    season:string | null;
    sub_title:string[] | null;
    discliption:string | null;
}

export default function DetailAnime({title ,season ,sub_title ,discliption}:DetailProps) {
    const [fadeStatus ,setFadeStatus] = useState< 'animate-fade-in'| 'animate-fade-out' | '' >('');
    const timeRef = useRef< NodeJS.Timeout | null >(null)


    function copyToClipboard() {
        const link = window.location.href;
        navigator.clipboard.writeText(link).then(() => {
            if(timeRef.current) clearTimeout(timeRef.current)
            setFadeStatus('animate-fade-in')
            setTimeout(() => {
                setFadeStatus('animate-fade-out')
            },2500)

        }).catch((err) => {
          alert("ไม่สามารถคัดลอกลิงก์ได้");
        });
      }

      useEffect(()=>{
        if(timeRef.current) clearTimeout(timeRef.current)
      },[])

    return(
        <div className="flex-1 shrink-0 md:pt-5 w-full max-w-[60vw] bg-black/0 flex flex-col gap-1.5 items-center md:items-start " >
        <h1 className="lg:text-3xl font-bold hidden md:block " >{title}</h1>
        <h4 className=" lg:text-2xl font-bold text-white/50" >{season?? 'Season ---'}</h4>
        <div  className="flex gap-5 justify-start items-center h-auto w-auto  mt-3 ">
            {sub_title?.map((sub ,i) =>  <span key={i} className=" flex justify-center items-center px-4 py-1 text-[13px] text-white/95 rounded-sm border-1 border-white/50 bg-white/5 " > {sub} </span>)}
        </div>
        <div className="flex items-center gap-6 mt-7">
            <button className=" shrink-0 cursor-pointer hover:bg-white/85 transition-colors px-10 py-2.5 rounded-full bg-white text-black flex items-center gap-4 font-light lg:text-[17px] " >
                <Tv /> รับชมตอนนี้
            </button>
            <button className=" p-3 rounded-full hover:bg-white/85 hover:text-black transition-all cursor-pointer  " onClick={copyToClipboard} >
                <Share2 />
            </button>
            <button className=" p-3 rounded-full hover:bg-white/85 hover:text-black transition-all cursor-pointer hidden "  >
                <Wrench />
            </button>
            
        </div>
        <div>
            <p className="text-[15px] text-white/80 font-light mt-3 lg:mt-5 leading-7">
                {discliption ?? 'ไม่พบเรื่องย่อ'}
            </p>
        </div>
        
        <div className={clsx("opacity-0 pointer-events-none fixed top-1/2 left-1/2 translate-x-[-50%] px-3 py-2 text-xl bg-[#eee9e9] text-black/85 rounded-lg z-999 lg:text-lg "
            ,fadeStatus
        )}>
            คัดลอกลิ้งค์แชร์สำเร็จ
        </div>

    </div>
    );
}