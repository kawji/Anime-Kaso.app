import Logo from "@/components/ui/navbar/logo";
import SearchAnime from "@/components/ui/navbar/search";

export default function Navbar() {
    return(
        <nav className="fixed z-100 flex items-center px-10 bg-[var(--primary-bg)] w-full sm:h-16 top-0 left-0 border-b border-b-white/35 "  >
            <Logo />
            <SearchAnime />
        </nav>
    );
}