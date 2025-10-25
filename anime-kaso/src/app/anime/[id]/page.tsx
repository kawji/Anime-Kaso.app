'use client'
import Anime from "@/components/feature/layout-detail/anime";
import Watch from "@/components/feature/layout-detail/watch";
import Recommend from "@/components/feature/layout-detail/recommend";
import Footer from "@/components/feature/layout-footer/footer";
import FormAnime from "@/components/feature/layout-detail/formAnime";

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
  }


    return (
      <div className="mt-5 sm:mt-7 font-sans min-h-screen flex overflow-x-hidden text-white bg-black/50  flex-col" >
        <Anime id={params.id==='' ? Number('0'):params.id}  />
        <Watch id={params.id==='' ? Number('0'):params.id}  />
        <Recommend />
        <Footer />
        <FormAnime />


      </div>
    ); 
  }


// 'https://api.jikan.moe/v4/anime/${id}'