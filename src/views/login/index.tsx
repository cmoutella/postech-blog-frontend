"use client";
import { useState } from "react";

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-full px-6 py-10">
      <div className="container">
        <div className="flex justify-center">
          <div className="px-6 py-8 bg-slate-800 max-w-80 shadow-md shadow-white">
            <form className="flex flex-col items-center gap-3">
              <span className="gap-1 flex flex-col">
                <label
                  htmlFor="username"
                  className="text-fiap font-bold text-xs"
                >
                  Username
                </label>
                <input type="text" name="username" />
              </span>
              <span className="gap-1 flex flex-col">
                <label
                  htmlFor="password"
                  className="text-fiap font-bold text-xs"
                >
                  Password
                </label>
                <input type="text" name="password" />
              </span>
              <button
                type="submit"
                className="bg-pink-600 px-2 py-1 rounded-md text-sm mt-4"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
