"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { LogIn, LogOut, Menu, MoveLeft } from "lucide-react";
import logodark from "@/assets/logo-dark.png";
import Image from "next/image";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu onOpenChange={handleToggle}>
      <DropdownMenuTrigger>
        <Menu
          size={35}
          strokeWidth={3}
          className={`text-zinc-900 transition-transform duration-500 focus:outline-none focus:ring-0 ${
            isOpen ? "rotate-180" : "rotate-0"
          } mr-7`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem>Option 3</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="/login">
            {/* <LogOut color="#1E1E1E" className="p-1 rounded-full" /> */}
            LogIn/LogOut
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  return (
    <div className="flex flex-col p-0 m-0 bg-slate-900 bg-opacity-50">
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
          <MyDropdownMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
