import { Button } from "@/components/ui/button"; 
import { useSessionContext } from "@/providers/AuthProvider";

export default function AdmButtons() {
  const { user } = useSessionContext();
  return (
    <header className="flex justify-between items-center p-4 m-5">
      <div>
        <span className="text-xl font-semibold">Olá Prof. {user?.username}</span>
      </div>
      <div className="flex gap-4">
        <Button className="bg-zinc-800 text-white">Editar meus dados</Button>
        <Button className="bg-fiap text-white">
            <a href="/admin/post/create">Novo Post</a>
        </Button>
      </div>
    </header>
  );
}
