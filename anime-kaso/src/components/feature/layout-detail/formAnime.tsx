


function FormAnime() {
    return(
        <div className="fixed flex w-full h-full bg-black/55 z-99 justify-center items-center ">
            <form  className="w-full h-auto sm:w-2xl bg-[#1d1d1d] py-5 px-7 rounded-md border border-white/10 "  >
            <span className=" flex flex-col gap-[1px] w-full pb-5 ">
                <h6 className=" text-lg text-white/88 ">
                    แบบฟอร์มเพิ่มข้อมูลอนิเมะ
                </h6>
                <p className=" text-md text-white/44 ">กรุณากรอกข้อมูลเพิ่มเติม เพื่ออัปเดตข้อมูลอนิเมะ</p>
            </span>

            <span className="flex flex-col pb-5  border-b border-b-white/17 mt-2">
                <h6 className=" text-lg text-white/88">
                    อัปเดตซีซั่น 
                </h6>
                <p className=" text-md text-white/44 ">เพิ่มข้อมูลอนิเมะเรื่องนี้ ว่าเป็นซีซั่นที่เท่าไหร่</p>
                <span className=" flex gap-3 mt-3">
                    <p className=" text-md text-white/88 ">Season</p>
                    <input type="number" placeholder="1" className="outline-none appearance-none focus:outline-none focus:ring-2 focus:ring-gray-800/0
                     border border-white/50 rounded w-7.5 pr-1.5 flex justify-center items-center pl-1.5 hover:border-white/75 transition-all  " />
                    
                </span>

            </span>


            </form>
        </div>
    )
}

export default FormAnime