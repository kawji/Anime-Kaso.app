'use client'
import "../globals.css";
import Navbar from "@/components/feature/layout-main/navbar";
import { QueryClient } from '@tanstack/react-query';
import { useState } from "react";
import { Metadata } from "next";


export default function All({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient())
  return children
}
