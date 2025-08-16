'use client'
import "../globals.css";
import { QueryClient } from '@tanstack/react-query';
import { useState } from "react";

export default function NoEnd({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient())

  return children
}
