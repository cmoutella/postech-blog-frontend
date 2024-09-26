import noResultsImage from "@/assets/no-results.png";
import Image from "next/image";

export default function BlankState() {
  return (
    <div className="container flex justify-center">
      <div className="flex justify-between items-center mb-8">
        <Image
          src={noResultsImage}
          alt="Logo"
          width={180}
          height={180}
          className="max-w-xs animate-bounce-slow" // Adiciona a animação aqui
        />
      </div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-zinc-600 text-xl font-medium">
          Nenhum Post Foi Encontrado
        </p>
      </div>
    </div>
  );
}
