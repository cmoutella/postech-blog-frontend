"use client";
import { useState, type ReactNode, useEffect } from "react";

import { redirect } from "next/navigation";

import { useSessionContext } from "@/providers/authProvider";
import { useUIContext } from "@/providers/UIProvider";
import { PrivateBasePage } from "@/ui/templates/PrivateBasePage";
import { getToken } from "@/services/storage";

interface LayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: LayoutProps) {
  const { isLogged } = useSessionContext();
  const { loading } = useUIContext();
  const [loadingPage, setLoadingPage] = useState(true);
  const { authenticate } = useSessionContext();

  const autenticatedHandle = () => {
    const auth = getToken();

    authenticate(auth);
  };

  useEffect(() => {
    loading.on();
    autenticatedHandle();

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
