"use client";

import SessionButton from "../sessionButton";

const Navbar = () => {
  return (
    <div className="w-full px-6 py-3 bg-fiap">
      <div className="container flex justify-between gap-10 text-white">
        <div className="flex gap-10">
          <h1 className="font-bold">Postech Blog</h1>
          <p>This will be a navbar</p>
        </div>
        <div>
          <SessionButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
