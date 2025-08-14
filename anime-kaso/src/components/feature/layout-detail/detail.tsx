
export default function Detail() {
    
    return(
        <div className="flex m-5 mt-15 w-full h-auto bg-blue-950/50 gap-25 ">
            <div className="aspect-[3/4]  min-w-[270px] max-w-[350px] w-full overflow-hidden flex items-center justify-center rounded-md  " >
                <img src='/anime-test.jpg' className="" />
            </div>
            <div className="flex-1 shrink-0 pt-5 w-full max-w-[60vw] bg-black flex flex-col gap-3 " >
                <h1 className="lg:text-3xl font-bold  " >Solo Leveling</h1>
                <h4 className=" lg:text-2xl font-bold text-white/50" >Season  1</h4>
                <div  className="flex gap-5 justify-start items-center h-auto w-auto ">
                    <span className="flex justify-center items-center px-4 py-1 text-[13px] text-white/50 rounded-sm border-1 border-white/50 bg-white/15 " >ซับไทย</span>
                </div>
                <button>
                    
                </button>
            
            
            </div>
        </div>
    );
}