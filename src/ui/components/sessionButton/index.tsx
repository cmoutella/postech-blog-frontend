"use client";

import { useSessionContext } from "@/providers/authProvider";
import Link from "next/link";

const SessionButton = () => {
  const { user, logout } = useSessionContext();

  if (user) {
    return (
      <button
        className="rounded-md py-1 px-2 bg-black text-white border hover:bg-zinc-500 text-sm"
        onClick={logout}
      >
        Sair
      </button>
    );
  } else {
    return (
      <Link
        href={"/login"}
        className="rounded-md py-1.5 px-2 bg-black text-white border hover:bg-zinc-500"
      >
        Entrar
      </Link>
    );
  }
};

export default SessionButton;
