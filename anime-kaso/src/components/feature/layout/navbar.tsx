import Logo from "@/components/ui/Navbar/logo";
import SearchAnime from "@/components/ui/Navbar/search";

export default function Navbar() {
    return(
        <nav className="fixed z-100 flex items-center px-10 bg-[var(--primary-bg)] w-full h-10 sm:h-16 top-0 left-0 border-b border-b-white/35 text-white "  >
            <Logo />
            <SearchAnime />
        </nav>
    );
}