'use client'
import "../globals.css";
import Navbar from "@/components/feature/layout/navbar";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";

export default function AnimeSubthai({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient())

  return children
}
