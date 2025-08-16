
import Anime from "@/components/feature/layout-detail/anime";
import Watch from "@/components/feature/layout-detail/watch";
type AnimeProps = {
  params: {
    id:string
  }
}

export default async function AnimeAllDetail({ params }:AnimeProps ) {
  const { id } = await params
    console.log('id path',params.id)

    return (
    <div className="mt-5 sm:mt-7 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
      <Anime id={id}  />
      <Watch />

    </div>
  );
}

// 'https://api.jikan.moe/v4/anime/${id}'