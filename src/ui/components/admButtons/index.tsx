import { Button } from "@/components/ui/button"; 

export default function AdmButtons() {
  return (
    <header className="flex justify-between items-center p-4 m-5">
      <div>
        <span className="text-xl font-semibold">Olá Prof. Fulanito</span>
      </div>
      <div className="flex gap-4">
        <Button className="bg-zinc-800 text-white">Editar meus dados</Button>
        <Button className="bg-fiap text-white">
            <a href="/create">Novo Post</a>
        </Button>
      </div>
    </header>
  );
}
