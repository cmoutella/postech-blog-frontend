import { SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";
import storage from "@/services/storage";
import { isTokenValid } from "@/utils/auth";

export const getAllPostsAdminView: (
  teacherId: string,
  page?: number,
  limit?: number
) => Promise<PostInterface[] | undefined> = async (
  teacherId,
  page = 1,
  limit = 6
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("Ops! O servidor não está disponível.");
  }

  const postsUrl = `${baseUrl}/posts/admin/${teacherId}?page=${page}&limit=${limit}`;

  const cookie = storage.getToken();

  if (!cookie || !cookie.token || !isTokenValid(cookie.expireAt)) {
    throw new Error("Sua autenticação expirou, faça login novamente.");
  }

  return await fetch(postsUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.token}`,
    },
  }).then((res) => res.json());
};
