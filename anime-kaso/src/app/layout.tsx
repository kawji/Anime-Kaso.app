'use client';

import './globals.css';
import Navbar from '@/components/feature/layout-main/navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Noto_Sans_Thai, Noto_Sans } from 'next/font/google'

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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="th" className={`${notoSansThai.variable} ${notoSans.variable}`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
