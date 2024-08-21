/* eslint-disable react-hooks/rules-of-hooks */

import { Teacher } from "@/types";
import { TeacherAuth } from "@/types/apiResponses";
import { getToken, setToken } from "@/services/storage";
import { isBefore } from "date-fns";

export interface UserResponse {
  appToken: string;
}

export function getUserFn(): Teacher | undefined {
  const currAuth: TeacherAuth = getToken();
  if (!currAuth || !currAuth.userId) return undefined;

  // TODO: request /users/:id
  const userId = currAuth.userId;

  const mockedResponse: Teacher = {
    id: "123",
    age: 28,
    name: "Dumbledore",
  };

  return mockedResponse;
}

export async function handleUserResponse(loginAuth?: TeacherAuth) {
  const currAuth = getToken();

  const auth = loginAuth ?? currAuth;

  const authExpiration = new Date(auth.expireAt);
  const now = new Date();

  const authIsValid = authExpiration && isBefore(now, authExpiration);

  if (!auth && !authIsValid) {
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  // TODO: handle expiration
  setToken(auth);

  const user = getUserFn() as Teacher;

  return user;
}
