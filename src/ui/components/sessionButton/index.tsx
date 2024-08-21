"use client";

import { useSessionContext } from "@/providers/AuthProvider";
import Link from "next/link";

const SessionButton = () => {
  const { user, logout } = useSessionContext();

  if (user) {
    return (
      <button
        className="rounded-md py-1 px-2 border border-white text-white text-sm"
        onClick={logout}
      >
        Sair
      </button>
    );
  } else {
    return (
      <Link
        href={"/login"}
        className="rounded-md py-1.5 px-2 bg-white border-slate-700 border-1 text-slate-600"
      >
        Entrar
      </Link>
    );
  }
};

export default SessionButton;
