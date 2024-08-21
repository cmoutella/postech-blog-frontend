"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import { SessionTeacher } from "@/types";
import { TeacherAuth } from "@/types/apiResponses";
import storage from "@/services/storage";
import { getUserFn, handleUserResponse } from "@/services/auth";
import { authLogin } from "@/features/auth/login";

interface SessionContext {
  user?: SessionTeacher;
  isLogged: boolean;
  authenticate: (token: TeacherAuth) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const DEFAULT_VALUES = {
  user: undefined,
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
  // const router = useRouter();

  const handleSessionInit = async () => {
    const user = await getUserFn();

    setUser(user);
  };

  useEffect(() => {
    handleSessionInit();
  }, []);

  const login = async (username: string, password: string) => {
    const auth = await authLogin(username, password);
    if (!auth) return;

    const authUser = await handleUserResponse(auth);

    setUser(authUser);
  };

  const logout = () => {
    setUser(undefined);
  };

  const authenticate = () => {
    if (user) return;

    handleUserResponse()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        // showToast({
        //   type: "error",
        //   message: "Não foi possivel realizar o login tente mais tarde",
        // });
        setTimeout(() => {
          // redirect to login page
        }, 3000);
      });
  };

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
