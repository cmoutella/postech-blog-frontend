"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { SessionTeacher } from "@/types";
import { TeacherAuth } from "@/types/apiResponses";
import storage from "@/services/storage";
import { getUserFn, handleUserResponse } from "@/services/auth";
import { authLogin } from "@/features/auth/login";
import { isTokenValid } from "@/utils/auth";
import { showToast } from "@/ui/components/toast";

interface SessionContext {
  user?: SessionTeacher;
  isLogged: boolean;
  authenticate: (token: TeacherAuth) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const DEFAULT_VALUES = {
  user: getUserFn() ?? undefined,
  isLogged: storage.hasToken(),
  login: (u: string, p: string) => {},
  logout: () => {},
  authenticate: () => {},
};

const SessionContext = createContext<SessionContext>(DEFAULT_VALUES);

export const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("Missing SessionContext on React three");
  }

  return context;
};

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<SessionTeacher>(DEFAULT_VALUES.user);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    const auth = await authLogin(username, password);
    if (!auth) return;

    await handleUserResponse(auth).then((res) => {
      setUser(res);
      router.push("/admin");
    });
  };

  const logout = () => {
    setUser(undefined);
    storage.clearToken();
    router.push("/login");
  };

  const authenticate = (auth: TeacherAuth) => {
    if (user) return;
    if (auth && auth.expireAt && isTokenValid(auth.expireAt)) {
      setUser(auth.user);
      return;
    }

    handleUserResponse()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        showToast({
          type: "error",
          message: "Não foi possivel realizar o login tente mais tarde",
        });
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      });
  };

  // TODO: esse nao ta rolando, pq?
  const isLogged = useMemo(
    () => user !== undefined && storage.hasToken(),
    [user]
  );

  const value = {
    user,
    isLogged,
    login,
    logout,
    authenticate,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
