import Iq from "@/components/ui/icons/iq";
import Bilibili2 from "@/components/ui/platform/bilibili2";
import Crunchyroll2 from "@/components/ui/platform/crunchyroll2";
import Funimation2 from "@/components/ui/platform/funimation2";
import Disney2 from "@/components/ui/platform/disney";
import Netflix2 from "@/components/ui/platform/netflix2";
import Primevideo2 from "@/components/ui/platform/primevideo";
import YouTube2 from "@/components/ui/platform/youtube";
import Logo from "@/components/ui/navbar/logo";

export default function Footer() {
    return(
        <footer className="w-full flex flex-col items-center h-auto py-[40px] bg-amber-50/2 lg:gap-4 ">
            <h1 className="flex w-full leading-relaxed text-2xl text-white items-center justify-center font-medium tracking-normal ">อนิเมะถูกลิขสิทธิ์มากมาย</h1>
            <h1 className="flex w-full leading-relaxed text-[18px] text-white/70 items-center justify-center font-light tracking-wider ">รองรับแพลตฟอร์มต่างๆมากมายให้รับชม</h1>
            <div className="mt-5 flex justify-center items-center w-full h-auto bg-black/0 ">
                <div className="flex lg:w-[700px] h-auto  p-2 gap-10  flex-wrap ">
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

            <div className="w-full h-auto bg-black flex flex-col items-center p-8 gap-5 ">
                <span className="flex items-center justify-center gap-5">
                    <Logo text="text-[22px] " />
                    {/* ภาษา */}
                </span>

                <div className="lg:w-[1200px] h-auto flex p-5 bg-white/3 ">
                    {/* Column 1 */}
                    <div className="flex flex-col items-start gap-3">
                        <span className="flex items-center gap-5">
                            <h1 className="text-xl lg:text-2xl text-white/90 font-semibold ">เกี่ยวกับ</h1>
                        </span>
                        <p className="text-md lg:text-sm text-white/75 font-medium leading-relaxed tracking-wide ">
                        เว็บไซต์นี้ถูกสร้างขึ้นเพื่อรวบรวมและแสดงข้อมูลอนิเมะ<br/>
                        โดยอ้างอิงจาก Jikan API เพื่อให้ผู้ชมเข้าถึงข้อมูลได้สะดวก ไม่ใช่เว็บสตรีมมิ่งจริง
                        </p>

                    </div>

                    {/* Column 1 */}
                    <div className="flex flex-col items-start">



                    </div>





                </div>
                <div className="w-[1200px] h-auto flex p-5 bg-amber-50/5 ">

                </div>

            </div>
        </footer>
    );
}