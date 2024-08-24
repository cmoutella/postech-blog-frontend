"use client";
import { useState, type ReactNode, useEffect } from "react";

import { redirect } from "next/navigation";

import { useSessionContext } from "@/providers/AuthProvider";
import { useUIContext } from "@/providers/UIProvider";
import { PrivateBasePage } from "@/ui/templates/PrivateBasePage";

interface LayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: LayoutProps) {
  const { isLogged } = useSessionContext();
  const { loading } = useUIContext();
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    loading.on();

    setTimeout(() => {
      loading.off();
      setLoadingPage(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingPage === true) {
    return <></>;
  }

  if (isLogged) return <PrivateBasePage>{children}</PrivateBasePage>;

  return redirect("/login");
}
