
type Props = {
    children: React.ReactNode;
}

export default function ContainerTitle({ children }:Props ) {
    return(
        <div className="relative flex items-center justify-start lg:ml-[0px] mt-8 lg:mb-0 sm:ml-[45px] ml-4 max-w-[70vw] w-[88%] h-auto leading-0 " >
            {children}
        </div>
    );
}