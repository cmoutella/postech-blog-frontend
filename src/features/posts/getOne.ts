import { SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";

export const getOnePosts: (
  postId: string
) => Promise<SuccessResponse<PostInterface>> = async (postId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("Serviço indisponível");

  const postsUrl = `${baseUrl}/posts/${postId}`;

  return await fetch(postsUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
