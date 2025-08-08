type Props = {
    title:string
}

export default function TitleContent({ title }:Props ) {
    return(
        <h3 className="text-2xl lg:text-4xl text-white/90 font-semibold  tracking-wider ">
            {title}
        </h3>
    );
}