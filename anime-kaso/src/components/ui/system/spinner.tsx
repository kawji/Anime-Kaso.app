import clsx from "clsx";
type CustomDesign = {
    position?:string;
}

export default function Spinner({position}:CustomDesign ) {
    return(
        <div  className={clsx("w-full h-full flex items-center justify-center shrink-0 absolute  ",position)}>
            <span className="animate-spin border-t-4 border-l-2 rounded-full h-12 w-12 border-blue-500  ">

            </span>
        </div>
    );
}