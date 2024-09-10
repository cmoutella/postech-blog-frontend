/* eslint-disable react-hooks/rules-of-hooks */

import { Teacher } from "@/types";
import { TeacherAuth } from "@/types/apiResponses";
import { clearToken, getToken, setToken } from "@/services/storage";
import { isTokenValid } from "@/utils/auth";

export function getUserFn(): Teacher | undefined {
  const currAuth: TeacherAuth = getToken();
  if (!currAuth) return undefined;

  const authIsValid = isTokenValid(currAuth.expireAt);

  if (!authIsValid) return undefined;

  return currAuth.user;
}

export async function handleUserResponse(loginAuth?: TeacherAuth) {
  const currAuth: TeacherAuth = getToken();

  const auth: TeacherAuth = loginAuth ?? currAuth;

  if (!auth) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }
  const authIsValid = isTokenValid(auth.expireAt);

  if (!authIsValid) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  setToken(auth);

  const user = (await getUserFn()) as Teacher;

  return user;
}
