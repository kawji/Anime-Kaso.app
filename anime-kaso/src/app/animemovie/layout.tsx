import "../globals.css";
import Navbar from "@/components/feature/layout/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        {children}

    </>
  );
}
