'use client'

export default function ButtonCarousel() {
    return(
        <div className="p-8 flex justify-center items-end shrink-0 ">
            <button className=" px-7.5 sm:px-9 py-[7px] sm:py-[7px] bg-[var(--color-primary)] rounded-md text-black text-[14px] sm:text-[16px] transition-all hover:bg-[#B0CAE2] hover:text-[var(--color-dense)] cursor-pointer ">รับชมตอนนี้</button>
        </div>
    );
}