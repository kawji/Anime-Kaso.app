'use client';

import './globals.css';
import Navbar from '@/components/feature/layout-main/navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
