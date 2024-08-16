/* eslint-disable react-hooks/rules-of-hooks */

import { Teacher } from "@/types";
import { TeacherAuth } from "@/types/apiRequests";
import { getToken, setToken } from "@/utils/storage";

export interface UserResponse {
  appToken: string;
}

export function getUserFn(): Teacher | undefined {
  const currAuth: TeacherAuth = getToken();
  const userId = currAuth.userId;

  if (!userId) return undefined;
  // TODO: request /users/:id

  const mockedResponse: Teacher = {
    id: "123",
    age: 28,
    name: "Dumbledore",
  };

  return mockedResponse;
}

export async function handleUserResponse(loginAuth?: TeacherAuth) {
  const currAuth = getToken();

  const auth = currAuth ?? loginAuth;

  if (!auth) {
    throw new Error("Não foi possivel confirmar suas credenciais");
  }

  // TODO: handle expiration
  setToken(auth);

  const user = getUserFn() as Teacher;

  return user;
}
