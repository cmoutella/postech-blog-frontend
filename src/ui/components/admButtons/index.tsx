import { Button } from "@/components/ui/button";
import { useSessionContext } from "@/providers/authProvider";

export default function AdmButtons() {
  const { user } = useSessionContext();
  return (
    <header className="container flex justify-between items-center mb-4 gap-10">
      <div>
        <span className="text-xl font-semibold">
          Olá Prof. {user?.username}
        </span>
      </div>
      <div className="flex gap-4">
        <Button variant="default">
          <a href="/admin/post/create">Novo Post</a>
        </Button>
      </div>
    </header>
  );
}
