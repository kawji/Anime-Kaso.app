import Navbar from "@/components/feature/layout/navbar";
import Sidebar from "@/components/feature/layout/sidebar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen pb-20  flex">
      <Navbar />
      <Sidebar />
    </div>
  );
}
