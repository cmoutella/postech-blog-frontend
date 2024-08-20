import { TeacherAuth } from "@/types/apiRequests";
import { SuccessResponse } from "@/types/apiResponses";

export const authLogin: (
  username: string,
  password: string
) => Promise<TeacherAuth | undefined> = async (username, password) => {
  // devemos esconder a senha na request e passar aplicando o SECRET?
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const loginUrl = `${baseUrl}/users/login`;

  console.log("loginUrl", loginUrl);

  const credentials = { username: username, password: password };

  try {
    console.log("im trying");
    debugger;
    const auth = await fetch(loginUrl, {
      body: JSON.stringify(credentials),
    });

    console.log("promise", auth);

    const res = await auth.json();

    console.log("res", res);

    if (res.error) {
      throw Error("Não foi possivel completar atualizar suas credenciais");
    }

    const { data } = res as SuccessResponse<TeacherAuth>;

    return data;
  } catch (err) {
    console.log("deu ruim");
    return undefined;
  }
};
