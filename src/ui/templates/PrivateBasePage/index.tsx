/* eslint-disable @next/next/no-img-element */
"use client";
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
      <main className="h-auto p-4 pt-24 md:ml-64 border border-black">
        <p>Este é o template de uma página admin</p>
        <div className="container mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
