import CarouselScroll from "@/components/ui/detail-anime/animePopList";

export default function Recommend() {
    return(
        <div className="flex flex-col gap-5 w-full pl-[40px] ">
            <h2 className="text-white/95 font-bold text-[26px]  ">อนิเมะที่คุณอาจสนใจ</h2>
            <CarouselScroll />
        </div>
    );
}