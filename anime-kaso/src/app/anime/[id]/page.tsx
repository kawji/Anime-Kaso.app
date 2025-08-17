
import Anime from "@/components/feature/layout-detail/anime";
import Watch from "@/components/feature/layout-detail/watch";
import CarouselScroll from "@/components/ui/detail-anime/carousel";


type AnimeProps = {
  params: Promise<{
    id:string
  }>
}

export default async function AnimeAllDetail(props:AnimeProps) {
  const params = await props?.params;
  console.log('id path',params)
    // ป้องกันตั้งแต่ต้น ถ้า id ไม่ถูกต้อง
  if (!params.id || isNaN(Number(params.id))) {
        return <div>Invalid Anime ID</div>; // หรือ redirect, notFound() ก็ได้
  }else {
    return (
      <div className="mt-5 sm:mt-7 font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black/50  flex-col " >
        <Anime id={params.id==='' ? Number('52480'):params.id}  />
        <Watch />
        <CarouselScroll />
    
      </div>
    ); 
  }
}

// 'https://api.jikan.moe/v4/anime/${id}'