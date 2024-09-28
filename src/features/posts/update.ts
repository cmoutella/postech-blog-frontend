import storage from "@/services/storage";
import { showToast } from "@/ui/components/toast";
import { isTokenValid } from "@/utils/auth";



export const updatePost: (postId: string, postUpdated?: Object) => Promise<Response> = async (
    postId, postUpdated
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
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.token}`,
    },
    body: JSON.stringify(postUpdated),
  }).then((res) => res.json());
};