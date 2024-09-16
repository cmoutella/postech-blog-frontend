import { SetStateAction, useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fullText = '|';
    let currentIndex = 0;

    const interval = setInterval(() => {
      setPlaceholder(fullText.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        currentIndex = 0;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Função para detectar mudanças no input
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[1090px]">
        <p className='font-bold text-zinc-400 ml-8 mb-5'>What are you looking for?</p>
        <div className="flex items-center space-x-2 relative">
          <Search className="text-black" />
          <div className="relative w-full">
            <input
              type="text"
              value={inputValue} // Vinculando o valor do input ao estado
              onChange={handleInputChange} // Detecta a mudança no input
              className="w-full bg-transparent text-black border-none focus:outline-none"
              style={{ caretColor: "black" }} // Mostrar o cursor quando digitar
            />
            {!inputValue && ( // Exibe o placeholder apenas se não houver texto no input
              <div className="absolute inset-0 pointer-events-none flex items-center">
                <span className="text-slate-900 font-extrabold text-xl">Sear</span>
                <span className="text-gray-400">{placeholder}</span>
                <span className="text-gray-300 font-bold text-xl">ch</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
