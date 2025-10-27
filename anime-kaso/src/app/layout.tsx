
import './globals.css';
import Navbar from '@/components/feature/layout-main/navbar';
import { Noto_Sans_Thai, Noto_Sans } from 'next/font/google'
import RootProvider from './RootProvider';



export const metadata = {
  title: "Anime - Kawso.app",
  description: "โปรเจกต์ Anime - Kaso.com คือเว็บไซต์ที่พัฒนาเพื่อแสดงข้อมูลอนิเมะ ",
  icons: {
    icon: "/favicon.png"
  }
};



const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-thai',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-latin',
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="th" className={`${notoSansThai.variable} ${notoSans.variable}`}>
      <body>
        <RootProvider>
          <Navbar />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
