import storage from "@/services/storage";
import { showToast } from "@/ui/components/toast";
import { isTokenValid } from "@/utils/auth";

export const createPost: (postCreated: Object) => Promise<Response> = async (
    postCreated
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("Ops! O servidor não está disponível.");
  }

  const postsUrl = `${baseUrl}/posts`;

  const cookie = storage.getToken();

  if (!cookie || !cookie.token || !isTokenValid(cookie.expireAt)) {
    throw new Error("Sua autenticação expirou, faça login novamente.");
  }

  return await fetch(postsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.token}`,
    },
    body: JSON.stringify(postCreated),
  });
};
