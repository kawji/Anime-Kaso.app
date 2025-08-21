import IconWatch from "@/components/ui/detail-anime/iconWatch";
import YouTube from "@/components/ui/icons/youTube";
import Netflix from "@/components/ui/icons/netflix";


export default function Watch() {
    return(
        <div className="w-full h-auto flex flex-col bg-blue-800/0 p-[40px] gap-5 ">
            <h1 className="flex items-center justify-start text-[26px] font-bold ">ช่องทางการรับชม</h1>
            <div className="flex items-center w-full h-auto py-5 pr-5  " > 
                <div className="flex p-0 bg-white/0 gap-5 w-full h-auto  ">
                    <IconWatch tagIcon={<YouTube />} name="YouTube" />
                    <IconWatch tagIcon={<Netflix />} name="Netflix" />


{/* 
                    <span className="shrink-0 p-5 bg-white/7 cursor-pointer hover:bg-white/15 transition-colors hover:opacity-85 "><YouTube /></span> */}

                </div>

            </div>
        
        </div>
    );
}