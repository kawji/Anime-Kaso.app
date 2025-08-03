type Props = {
    title:string
}

export default function TitleContent({ title }:Props ) {
    return(
        <h3 className="text-2xl lg:text-4xl text-white/90 font-semibold lg:ml-[80px] sm:ml-[45px] ml-4 ">
            {title}
        </h3>
    );
}