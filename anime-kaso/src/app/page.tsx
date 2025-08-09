import Sidebar from "@/components/feature/layout/sidebar";
import MainContent from "@/components/feature/layout/mainContent";


export default function Home() {
  return (
    <div className="font-sans min-h-screen pb-20 flex overflow-x-hidden text-white bg-black " >
      <Sidebar />
      <MainContent />
    </div>
  );
}
