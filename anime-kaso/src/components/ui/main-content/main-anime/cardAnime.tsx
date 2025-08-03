
type Props = {
  //png : {what? image || file }
    title:string
    chapter:number
}

export default function CardAnime() {
    return(
        <article className="flex flex-1 grow shrink-1 min-w-[170px]  max-w-[200px] w-full mx-auto rounded-lg overflow-hidden relative hover:shadow-2xl hover:shadow-[#232323)] group transition-all cursor-pointer" >
            <figure className="aspect-[3/4] overflow-hidden" >
                <img src='anime-test.jpg' className="opacity-90 object-cover w-full h-full group-hover:opacity-100 group-hover:scale-104 transition-all duration-500 ease-in-out " />
            </figure>

            <footer className="absolute bottom-0 left-0 w-full p-2 flex flex-col gap-2.5 bg-black/75 " >
                <h6 className="line-clamp-1 hover:text-[var(--primary-text-card)] ">Katsute Mahou Shoujo to Aku wa Tekitai shiteita</h6>
                <span className="rounded px-2 py-1 text-[white/75] bg-black/50 flex justify-center items-center group-hover:bg-white/75 group-hover:text-black transition-all ">
                    ตอนที่&nbsp;12
                </span>
            </footer>


        </article>
    );
}