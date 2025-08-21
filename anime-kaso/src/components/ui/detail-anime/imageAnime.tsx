import Spinner from "../system/spinner";
import { Skeleton } from "../system/skeleton";


type ImageAnimeProps = {
    png: string ;
}

export default function ImageAnime({ png }:ImageAnimeProps) {
    console.log('PNG Anime ---> ',png)
    return(
        <div className="aspect-[3/4]  min-w-[170px] max-w-[250px] w-full overflow-hidden flex items-center justify-center rounded-md  " >
            {png?   <img src={png} className=" w-full h-full " loading="lazy" /> : <Skeleton width="w-full" height="h-full" rounded="rounded" /> }
        </div>
    );
}