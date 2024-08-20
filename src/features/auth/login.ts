import { TeacherAuth } from "@/types/apiRequests";
import { SuccessResponse } from "@/types/apiResponses";

export const authLogin: (
  username: string,
  password: string
) => Promise<TeacherAuth | undefined> = async (username, password) => {
  // devemos esconder a senha na request e passar aplicando o SECRET?
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) return undefined;

  const loginUrl = `${baseUrl}/users/login`;
  const credentials = { username: username, password: password };

  try {
    const auth = await fetch(loginUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const res = await auth.json();

    if (res.error) {
      throw Error("Não foi possivel completar atualizar suas credenciais");
    }

    const { data } = res as SuccessResponse<TeacherAuth>;

    return data;
  } catch (err) {
    return undefined;
  }
};
