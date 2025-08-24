import PlatformAnime from "../layout-footer/platformAnime";
import FooterAnime from "../layout-footer/footerAnime";

export default function Footer() {
    return(
        <footer className="w-full flex flex-col items-center h-auto pt-[40px] bg-amber-50/2 lg:gap-4 ">
            <PlatformAnime />
            <FooterAnime />
        </footer>
    );
}