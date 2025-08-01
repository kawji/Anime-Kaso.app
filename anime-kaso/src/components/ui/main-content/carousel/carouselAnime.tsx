import CaptionCarousel from "./captionCarousel";
import ImageCarousel from "./imageCarousel";

export default function CarouselAnime() {
    return(
        <article className=" flex justify-end items-end w-full h-[40vh] lg:h-[65vh] rounded-2xl ">
            <figure className="relative w-full h-full overflow-hidden cursor-pointer group rounded-2xl ">
                <ImageCarousel path='tanjiro1' />
                <CaptionCarousel />
            </figure>

        </article>
    );
}