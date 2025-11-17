'use client'
import Sidebar from "@/components/feature/layout-main/sidebar";
import MainContent from "@/components/feature/layout-main/mainContent";
import Recommend from "@/components/feature/layout-detail/recommend";
import Footer from "@/components/feature/layout-footer/footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="font-sans flex flex-col min-h-screen gap-0 bg-[#101010] ">
        <div className=" flex flex-col lg:flex-row overflow-x-hidden text-white pb-[1px] w-full h-auto 0 " >
          <div className="hidden w-auto h-full p-0 m-0 order-1 lg:flex  ">
            <Sidebar />
          </div>
          <div className=" h-auto p-0 m-0 order-2 w-full">
          <MainContent />
          </div>
        </div>
        <div className="bg-[#101010] sm:pl-3 ">
          <Recommend />
        </div>
        <div className="block w-full h-auto p-0 m-0 lg:hidden  ">
          <Sidebar />
        </div>
        <Footer />
      </div>

    </Suspense>

  );
}
