import { TeacherAuth } from "@/types/apiRequests";
import { SuccessResponse } from "@/types/apiResponses";

export const authLogin: (
  username: string,
  password: string
) => Promise<TeacherAuth | undefined> = async (username, password) => {
  // devemos esconder a senha na request e passar aplicando o SECRET?
  const baseUrl = process.env.BASE_URL;

  const credentials = { username: username, password: password };

  try {
    const auth = await fetch(`${baseUrl}/users/login`, {
      body: JSON.stringify(credentials),
    }).then((res) => res.json());

    if (auth.error) {
      throw Error("Não foi possivel completar atualizar suas credenciais");
    }

    const { data } = auth as SuccessResponse<TeacherAuth>;

    return data;
  } catch (err) {
    return undefined;
  }
};
