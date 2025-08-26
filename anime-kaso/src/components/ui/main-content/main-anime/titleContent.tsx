type Props = {
    title:string
}

export default function TitleContent({ title }:Props ) {
    return(
        <div className="mt-2 flex flex-col gap-5 items-start w-full left-0  ">
            <h3 className="text-3xl lg:text-4xl text-white/90 font-semibold  tracking-wider ">
                {title}
            </h3>
            <p className="text-[18px] text-white/70 font-light tracking-wide ">รายการอนิเมะที่เเนะนำ</p>
        </div>

    );
}