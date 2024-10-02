"use client";

import React from "react";
import { useRouter } from "next/navigation";
import logodark from "@/assets/logo-dark.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSessionContext } from "@/providers/authProvider";
import SessionButton from "../sessionButton";

const Navbar = () => {
  const router = useRouter();
  const { user } = useSessionContext();

  return (
    <div className="flex flex-col p-0 m-0 bg-gradient-to-r to-stone-200 via-stone-50 from-stone-200">
      <nav className="w-full flex justify-between items-center p-1">
        <div className="flex items-center">
          <a href="/">
            <Image
              src={logodark}
              alt="Logo"
              className="h-16 w-16 mt-2 translate-y-3"
            />
          </a>
        </div>
        <div className="flex items-center">
          <div className="flex flex-grow gap-2 m-6">
            {!!user && (
              <Button
                variant="secondary"
                onClick={() => router.push("/admin")}
                className="bg-black hover:bg-zinc-500"
              >
                Visão do Professor
              </Button>
            )}
            <SessionButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
