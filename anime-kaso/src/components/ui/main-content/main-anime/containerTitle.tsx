
type Props = {
    children: React.ReactNode;
}

export default function ContainerTitle({ children }:Props ) {
    return(
        <div className="relative flex items-center justify-start  mt-8  ml-0 w-[95%] sm:w-[88%] lg:max-w-[55vw] lg:w-[88%] h-auto leading-0 " >
            {children}
        </div>
    );
}