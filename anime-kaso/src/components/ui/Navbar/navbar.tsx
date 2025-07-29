import Logo from "./logo";
import SearchAnime from "./search";

export default function Navbar() {
    return(
        <nav className="fixed flex items-center px-20 bg-[var(--primary-bg)] w-full sm:h-16 top-0 left-0 border-b border-b-white/35 "  >
            <Logo />
            <SearchAnime />
        </nav>
    );
}