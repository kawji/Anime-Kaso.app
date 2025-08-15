
import Anime from "@/components/feature/layout-detail/anime";
type AnimeProps = {
  params: {
    id:string
  }
}

export default function AnimeAll({params}:AnimeProps ) {
    const id  = params.id;

    return (
    <div className="mt-10 sm:mt-16 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
      <Anime id={id ?? '' }  />


    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'