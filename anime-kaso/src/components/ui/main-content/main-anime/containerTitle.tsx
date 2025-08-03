
type Props = {
    children: React.ReactNode;
}

export default function ContainerTitle({ children }:Props ) {
    return(
        <div className="relative flex items-center justify-start lg:ml-[80px] mt-8 lg:mb-5 sm:ml-[45px] ml-4 max-w-[70vw] w-[88%] h-auto " >
            {children}
        </div>
    );
}