import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
  searchedValue: string;
  setSearchedValue: (s: string) => void;
  onSearch: () => Promise<void>;
};

export default function SearchBar({
  searchedValue,
  setSearchedValue,
  onSearch,
}: SearchBarProps) {
  const [writtingSymbol, setWrittingSymbol] = useState("");

  useEffect(() => {
    const fullText = "|";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setWrittingSymbol(fullText.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        currentIndex = 0;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Função para detectar mudanças no input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="container flex justify-center">
        <div className="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <p className="font-bold text-slate-400 ml-8 mb-5">
            Sobre o que você quer aprender hoje?
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full margin-auto">
              <div className="flex flex-col md:flex-row items-center gap-2 relative w-full">
                <Search className="text-slate-800" />
                <div className="relative w-3/4">
                  <input
                    type="text"
                    value={searchedValue}
                    onChange={handleInputChange}
                    className="bg-transparent text-rose-500 font-medium text-lg border-none focus:outline-none w-full"
                    style={{ caretColor: "black" }}
                  />
                  {!searchedValue && ( // Exibe o writtingSymbol apenas se não houver texto no input
                    <div className="absolute inset-0 pointer-events-none flex items-center">
                      <span className="text-slate-800 font-extrabold text-xl">
                        Busc
                      </span>
                      <span className="text-slate-400">{writtingSymbol}</span>
                      <span className="text-slate-300 font-bold text-xl">
                        ar
                      </span>
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="self-end ml-auto"
                  onClick={onSearch}
                >
                  Buscar
                </Button>
              </div>
              <p className="pl-8 text-xs text-slate-500">
                Busque por palavra chave
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
