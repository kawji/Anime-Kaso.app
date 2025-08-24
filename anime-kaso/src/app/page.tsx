import Sidebar from "@/components/feature/layout-main/sidebar";
import MainContent from "@/components/feature/layout-main/mainContent";
import Footer from "@/components/feature/layout-footer/footer";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen gap-5 ">
      <div className=" flex overflow-x-hidden text-white bg-black pb-5 " >
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
