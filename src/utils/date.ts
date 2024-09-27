import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (d: string) => {
  const date = new Date(d);

  console.log(date);
  return format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
};
