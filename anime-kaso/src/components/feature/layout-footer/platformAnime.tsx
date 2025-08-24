import Iq from "@/components/ui/icons/iq";
import Bilibili2 from "@/components/ui/platform/bilibili2";
import Crunchyroll2 from "@/components/ui/platform/crunchyroll2";
import Funimation2 from "@/components/ui/platform/funimation2";
import Disney2 from "@/components/ui/platform/disney";
import Netflix2 from "@/components/ui/platform/netflix2";
import Primevideo2 from "@/components/ui/platform/primevideo";
import YouTube2 from "@/components/ui/platform/youtube";


export default function PlatformAnime() {
    return(
        <div className="flex flex-col w-full items-center lg:gap-4">
            <h1 className="flex w-full leading-relaxed text-2xl text-white items-center justify-center font-medium tracking-normal ">อนิเมะถูกลิขสิทธิ์มากมาย</h1>
            <h1 className="flex w-full leading-relaxed text-[18px] text-white/70 items-center justify-center font-light tracking-wider ">รองรับแพลตฟอร์มต่างๆมากมายให้รับชม</h1>
            <div className="mt-5 flex justify-center items-center w-full h-auto bg-black/0 ">
                <div className="flex w-[700px] h-auto m-2 p-2 gap-10  flex-wrap ">
                    <Iq width="90" height="30" color="#858383cd" />
                    <Bilibili2 color="#858383cd" />
                    <Crunchyroll2 color="#858383cd" />
                    <Funimation2 />
                    <Disney2 />
                    <Netflix2 />
                    <Primevideo2 />
                    <YouTube2 />
                </div>
            </div>
        </div>
    )
}