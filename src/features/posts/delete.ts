import storage from "@/services/storage";
import { isTokenValid } from "@/utils/auth";

export const deletePost: (postId: string) => Promise<boolean> = async (
  postId
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) return false; //** TODO: toast feedback */

  const postsUrl = `${baseUrl}/posts/${postId}`;

  const cookie = storage.getToken();

  if (!cookie || !cookie.token || !isTokenValid(cookie.expireAt)) return false; //** TODO: toast feedback */

  try {
    const posts = await fetch(postsUrl, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.token}`,
      },
    }).then((res) => res.json());

    if (posts.error) {
      throw Error("Não foi possivel deletar o post");
    }

    return true;

    // TODO: success toast
  } catch (err) {
    // TODO: error toast
    console.log(err);
    return false;
  }
};
