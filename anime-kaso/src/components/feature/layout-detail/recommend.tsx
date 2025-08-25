import CarouselScroll from "@/components/ui/system/carouselScore";
import getRandomArray from "@/utils/randomArray";
import getNumberRandom from "@/utils/numberRandom";


export default function Recommend() {
    const numbers:number[] = getNumberRandom(100);
    const page =  getRandomArray(numbers)

    return(
        <div className="flex justify-start flex-col gap-5 w-full pl-[40px] pt-10 ">
            <h2 className="text-white/95 font-bold text-[26px] mt-5 ">อนิเมะที่คุณอาจสนใจ</h2>
            <CarouselScroll path="https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25" />

            <h2 className="text-white/95 font-bold text-[26px] mt-5 ">เรื่องที่ไม่ติดเรท</h2>
            <CarouselScroll path={`https://api.jikan.moe/v4/anime?sfw=true&page=${page+1}&limit=25`} />

            <h2 className="text-white/95 font-bold text-[26px] mt-5 ">อนิเมะมูฟวี่เพิ่มเติม</h2>
            <CarouselScroll path={`https://api.jikan.moe/v4/anime?type=movie&order_by=start_date&sort=desc&page=${page+5}&limit=25`} />

            <h2 className="text-white/95 font-bold text-[26px] mt-5 ">เพิ่มเติม</h2>
            <CarouselScroll path={`https://api.jikan.moe/v4/anime?status=complete&order_by=start_date&sort=desc&page=${page}&limit=25`} />
      
        </div>
    );
}