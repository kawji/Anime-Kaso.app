import clsx from "clsx";

type CustomDesign = {
    width:string;
    height:string;
    rounded?:string;
}

export function Skeleton({width ,height ,rounded}:CustomDesign ) {
    return(
        <div className={clsx('bg-[#302e2e] animate-pulse  ',width,height ,rounded )}>

        </div>
    );
}