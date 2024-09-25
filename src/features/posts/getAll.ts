import { SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";

export const getAllPosts: (
  page?: number,
  limit?: number
) => Promise<PostInterface[] | undefined> = async (page = 1, limit = 6) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) return undefined;

  const postsUrl = `${baseUrl}/posts?page=${page}&limit=${limit}`;

  try {
    const posts = await fetch(postsUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (posts.error) {
      throw Error("Não foi possivel encontrar posts");
    }

    const { data } = posts as SuccessResponse<PostInterface[]>;

    return data;
  } catch (err) {
    return undefined;
  }
};
