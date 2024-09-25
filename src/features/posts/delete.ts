import storage from "@/services/storage";
import { showToast } from "@/ui/components/toast";
import { isTokenValid } from "@/utils/auth";

export const deletePost: (postId: string) => Promise<Response> = async (
  postId
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("Ops! O servidor não está disponível.");
  }

  const postsUrl = `${baseUrl}/posts/${postId}`;

  const cookie = storage.getToken();

  if (!cookie || !cookie.token || !isTokenValid(cookie.expireAt)) {
    throw new Error("Sua autenticação expirou, faça login novamente.");
  }

  return await fetch(postsUrl, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.token}`,
    },
  });
};
