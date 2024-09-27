import { InterfaceList, SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";

export const getAllByKeyword: (
  keyword: string,
  page?: number,
  limit?: number
) => Promise<SuccessResponse<InterfaceList<PostInterface>>> = async (
  keyword,
  page = 1,
  limit = 6
) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("Serviço indisponível");

  const postsUrl = `${baseUrl}/posts/search/${keyword}?page=${page}&limit=${limit}`;

  return await fetch(postsUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
