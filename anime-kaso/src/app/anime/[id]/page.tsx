
import Anime from "@/components/feature/layout-detail/anime";
import { log } from "console";
type AnimeProps = {
  params: {
    id:string
  }
}

export default async function AnimeAll({params,}:AnimeProps ) {
    const idpath  = params.id;
    console.log('id path',idpath)

    return (
    <div className="mt-10 sm:mt-16 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
      <Anime id={idpath ?? '' }  />


    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'