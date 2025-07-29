


export default function SearchAnime() {
    return(
        <div className=" flex items-center gap-3 justify-end grow px-20">
            <span className="text-[16px] text-white ">
                ค้นหาอนิเมะ
            </span>
            <input type='text' placeholder="ค้นหา..." className="pl-3 outline-none w-[60px] sm:w-[80px] lg:w-[240px] h-[30px] sm:h-[35px] rounded-md border border-white  " />
        </div>
    );
}