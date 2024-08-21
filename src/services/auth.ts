/* eslint-disable react-hooks/rules-of-hooks */

import { Teacher } from "@/types";
import { TeacherAuth } from "@/types/apiResponses";
import { clearToken, getToken, setToken } from "@/services/storage";
import { isBefore } from "date-fns";
import { getUserRequest } from "@/features/user/getUserRequest";

export interface UserResponse {
  appToken: string;
}

export async function getUserFn(): Promise<Teacher | undefined> {
  const currAuth: TeacherAuth = getToken();
  if (!currAuth || !currAuth.userId) return undefined;

  const teacher = await getUserRequest(currAuth.userId, currAuth.token);

  return teacher;
}

export async function handleUserResponse(loginAuth?: TeacherAuth) {
  const currAuth: TeacherAuth = getToken();

  const auth: TeacherAuth = loginAuth ?? currAuth;

  if (!auth) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  const authExpiration = new Date(auth.expireAt);
  const now = new Date();

  const authIsValid = authExpiration && isBefore(now, authExpiration);

  if (!authIsValid) {
    clearToken();
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  setToken(auth);

  const user = (await getUserFn()) as Teacher;

  return user;
}