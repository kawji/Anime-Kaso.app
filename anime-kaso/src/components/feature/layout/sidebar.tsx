'use client'
import { usePathname } from "next/navigation";
import { sidebarMenu } from "@/config/sidebarMenu";
// ui
import ButtonSidebar from "@/components/ui/Sidebar/button";
import TitleSidebar from "@/components/ui/Sidebar/title";

export default function Sidebar() {
    let namePath = usePathname();
    return(
        <aside  className="flex flex-col gap-2 left-0 w-full lg:w-[20vw] py-25 h-screen bg-black  ">
            <TitleSidebar title='หมวดหมู่' />

            {sidebarMenu.map((item) =>{
                return <ButtonSidebar key={item.path} section={item.section} path={item.path} status={item.path===namePath? true:false} /> 
            })}

        </aside>
    );
}