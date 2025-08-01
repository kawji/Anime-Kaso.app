import DetailCarousel from "./detailCarousel";
import ButtonCarousel from "./buttonCarousel";

export default function CaptionCarousel() {
    return(
        <figcaption className="flex absolute right-0 bottom-0 w-[75%] h-[28%] bg-black/50 backdrop-blur-[4px] rounded-tl-2xl shadow-lg shadow-blue-500 " >
            <DetailCarousel title='Demon Slayer- Kimetsu no Yaiba Season 1' subtitles="ซับไทย" chapter={24} />
            <ButtonCarousel />
        </figcaption>
    );
}