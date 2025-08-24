import Sidebar from "@/components/feature/layout-main/sidebar";
import MainContent from "@/components/feature/layout-main/mainContent";


export default function Home() {
  return (
    <div className="font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black " >
      <Sidebar />
      <MainContent />
    </div>
  );
}
