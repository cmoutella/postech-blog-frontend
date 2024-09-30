/* eslint-disable @next/next/no-img-element */
"use client";
import AdmButtons from "@/ui/components/admButtons";
import Navbar from "@/ui/components/navbar";
import type { ReactNode } from "react";

export interface HeaderProps {
  children?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}
const placeholderId = "private-header-placeholder";

export function PrivateBasePage({ children }: Omit<HeaderProps, "title">) {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="h-auto p-4 pt-10">
        <div className="container mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
