import { SuccessResponse } from "@/types/apiPatterns";
import { PostInterface } from "@/types";

export const getAllPosts: () => Promise<
  PostInterface[] | undefined
> = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("teste1", baseUrl);
  if (!baseUrl) return undefined;

  const postsUrl = `${baseUrl}/posts`;

  console.log("teste2");

  try {
    const auth = await fetch(postsUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (auth.error) {
      throw Error("Não foi possivel encontrar posts");
    }

    const { data } = auth as SuccessResponse<PostInterface[]>;

    return data;
  } catch (err) {
    return undefined;
  }
};
