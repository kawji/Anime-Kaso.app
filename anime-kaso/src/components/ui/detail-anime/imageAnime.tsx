import Image from "next/image";

type ImageAnimeProps = {
    png: string;
}

export default function ImageAnime({ png}:ImageAnimeProps) {
    return(
        <div className="aspect-[3/4]  min-w-[170px] max-w-[250px] w-full overflow-hidden flex items-center justify-center rounded-md  " >
            <img src={png} className=" w-full h-full " />
        </div>
    );
}