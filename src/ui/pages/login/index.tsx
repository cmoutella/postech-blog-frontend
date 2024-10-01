/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSessionContext } from "@/providers/authProvider";
import Input from "@/ui/components/base/input";
import { useState } from "react";
import Image from "next/image"; // Importa o componente Image do Next.js
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";

const LoginView = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

  const { login } = useSessionContext();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) return;

    await login(username, password);
  };

  const changeUsernameValue = (value: string) => {
    setUsername(value);
  };
  const changePasswordValue = (value: string) => {
    setPassword(value);
  };

  const EyeButton = () => {
    const eye = passwordVisible ? <Eye /> : <EyeOff />;

    return (
      <span
        className="cursor-pointer text-zinc-400 hover:text-slate-700"
        onClick={() => setPasswordVisible(!passwordVisible)}
      >
        {eye}
      </span>
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-1/2 bg-gradient-to-t from-fiap-dark to-fiap flex flex-col items-center justify-center p-6 md:p-0">
        <Image
          src={logo}
          alt="Logo"
          width={220}
          height={220}
          className="max-w-xs mb-10"
        />

        <h2 className="text-white text-2xl mb-3 font-thin">Let's post.</h2>
        <p className="text-white text-opacity-95 text-shadow text-sm text-shadow-sm text-center md:text-left font-sans">
          Behind everything, there's research.
        </p>
      </div>

      {/* Metade com a caixa de login */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="p-8 w-full max-w-md">
          <p className="text-4xl text-zinc-600 mb-5 font-medium">
            Get started
          </p>
          <div className="flex flex-col items-center gap-4 w-full">
            <Input
              label=""
              inputId="username"
              value={username ?? ""}
              onChange={changeUsernameValue}
              placeholder="Digite seu nome de usuário"
            />

            <Input
              inputId="password"
              label=""
              onChange={changePasswordValue}
              value={password ?? ""}
              type={passwordVisible ? "text" : "password"}
              placeholder="Digite sua senha"
              iconButton={<EyeButton />}
            />

            <button
              className="bg-zinc-950 hover:bg-zinc-600 px-4 py-2 rounded-md text-sm mt-4 self-end text-white"
              disabled={!password && !username}
              onClick={handleSubmit}
            >
              Entrar
            </button>

            <a href="/" className="text-fiap hover:text-fiap-dark underline text-sm font-medium">
              Sou aluno
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
