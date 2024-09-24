import { SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";
import storage from "@/services/storage";
import { isTokenValid } from "@/utils/auth";

export const getAllPostsAdminView: (
  teacherId: string
) => Promise<PostInterface[] | undefined> = async (teacherId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) return undefined;

  const postsUrl = `${baseUrl}/posts/admin`;

  const cookie = storage.getToken();

  if (!cookie || !cookie.token || !isTokenValid(cookie.expireAt))
    return undefined;

  try {
    const posts = await fetch(postsUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.token}`,
      },
      body: JSON.stringify({
        teacherId: teacherId,
      }),
    }).then((res) => res.json());

    if (posts.error) {
      throw Error("Não foi possivel encontrar posts");
    }

    const { data } = posts as SuccessResponse<PostInterface[]>;

    return data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
