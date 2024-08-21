import { SuccessResponse } from "@/types/apiPatterns";
import { Teacher } from "@/types";

export const getUserRequest: (
  id: string,
  token: string
) => Promise<Teacher | undefined> = async (id, token) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) return undefined;

  const loginUrl = `${baseUrl}/users/id/${id}`;

  try {
    const user = await fetch(loginUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (user.error) {
      throw Error("Não foi possivel completar atualizar suas credenciais");
    }

    const { data } = user as SuccessResponse<Teacher>;

    return data;
  } catch (err) {
    return undefined;
  }
};
