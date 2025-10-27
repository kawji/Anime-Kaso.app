import Logo from "@/components/ui/navbar/logo";

export default function FooterAnime() {
    return(
        <div className="w-full h-auto bg-black flex flex-col items-center py-8 px-8 gap-20 ">
            <div className=" h-auto flex p-5 gap-15 flex-wrap  ">
                <div className="flex flex-col items-start gap-3 lg:max-w-[350px] bg-amber-50/0  ">
                        <span className="flex items-center justify-center gap-5">
                            <Logo text="text-[22px] " />
                            {/* ภาษา */}
                        </span>
                    <p className="text-sm text-white/50 font-medium leading-relaxed tracking-wide ">
                    เว็บไซต์นี้ถูกสร้างขึ้นเพื่อรวบรวมและแสดงข้อมูล<br/>
                    โดยอ้างอิงจาก Jikan API เพื่อให้ผู้ชมเข้าถึงข้อมูลได้สะดวก ไม่ใช่เว็บสตรีมมิ่งจริง
                    </p>
                </div>

                <div className="flex flex-col items-start gap-1 flex-1 min-w-38 ">
                    <h1 className="text-lg text-white/90 font-medium mb-3">อ้างอิง</h1>
                    <a href="https://jikan.moe/" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        ข้อมูลอนิเมะจาก Jikan API (jikan.moe)
                    </a>
                    <a href="https://myanimelist.net" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        ข้อมูลพื้นฐาน © MyAnimeList
                    </a>                            

                </div>
                <div className="flex flex-col items-start gap-1 flex-1  min-w-42">
                    <h1 className="text-lg text-white/90 font-medium  mb-3">นโยบายและข้อกำหนด</h1>

                    <a href="/terms" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        ข้อกำหนดการใช้งาน
                    </a>
                    <a href="/privacy" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                    นโยบายความเป็นส่วนตัว 
                    </a>  
                    <a href="/disclaimer" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                    ข้อสงวนสิทธิ์ 
                    </a>                           

                </div>

                <div className="flex flex-col items-start gap-1 flex-1 min-w-38 ">
                    <h1 className="text-lg text-white/90 font-medium mb-3">ความช่วยเหลือ</h1>

                    <a href="/help" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        วิธีใช้งานเว็บไซต์
                    </a>
                    <a href="/help" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        คำถามที่พบบ่อย (FAQ)
                    </a>  
                    <a href="help" target="_blank" className="text-sm text-white/50 font-medium leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">
                        ติดต่อเรา 
                    </a>                           

                </div>

            </div>
            <div className="flex-col flex  h-auto sm:flex sm:flex-row  gap-7 p-5 items-center ">
                <p  className="text-sm text-white/50 leading-relaxed  tracking-wide ">© 2025 AnimeInfo. Released under the ISC License.</p>
                <a href="https://github.com/kawji/Anime-Kaso.com/blob/main/README.md" target="_blank" className="text-sm text-white/90 font-normal leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">Contribute</a>
                <a href="https://github.com/kawji/Anime-Kaso.com" target="_blank" className="text-sm text-white/90 font-normal leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">GitHub</a>
                <a href="https://github.com/kawji/Anime-Kaso.com/issues" target="_blank" className="text-sm text-white/90 font-normal leading-relaxed tracking-wide hover:text-white/70 hover:underline transition-colors ">Issues</a>
            </div>

        </div>
    )
}