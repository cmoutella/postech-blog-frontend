"use client";
import { useSessionContext } from "@/providers/AuthProvider";
import Input from "@/ui/components/base/input";
import { FormEvent, useState } from "react";

const LoginView = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

  const { login } = useSessionContext();

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    const eye = passwordVisible ? "XX" : "OO";

    return (
      <span
        className="cursor-pointer text-slate-600 hover:text-slate-700"
        onClick={() => setPasswordVisible(!passwordVisible)}
      >
        {eye}
      </span>
    );
  };

  return (
    <div className="w-full h-full px-6 py-10">
      <div className="container">
        <div className="flex justify-center">
          <div className="px-6 py-8 pb-6 bg-slate-800 w-6/12 max-w-xl shadow-md shadow-white">
            <div
              className="flex flex-col items-center gap-4 w-full"
              // onSubmit={handleSubmit}
            >
              <Input
                label="Usuário"
                inputId="username"
                value={username ?? ""}
                onChange={changeUsernameValue}
                placeholder="Digite seu nome de usuário"
              />
              <Input
                inputId="password"
                label="Senha"
                onChange={changePasswordValue}
                value={password ?? ""}
                type={passwordVisible ? "text" : "password"}
                placeholder="Digite sua senha"
                iconButton={<EyeButton />}
              />
              <button
                // type="submit"
                className="bg-pink-600 px-2 py-1 rounded-md text-sm mt-4 self-end"
                disabled={!password && !username}
                onClick={handleSubmit}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
