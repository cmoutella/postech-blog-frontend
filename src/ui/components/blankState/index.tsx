import noResultsImage from "@/assets/no-results.png";
import Image from "next/image";

type BlankStateProps = {
  message: string;
};

export default function BlankState({ message }: BlankStateProps) {
  return (
    <div className="container flex justify-center">
      <div className="container flex flex-col gap-10 justify-center items-center">
        <div className="flex justify-center items-center">
          <Image
            src={noResultsImage}
            alt="Logo"
            width={180}
            height={180}
            className="max-w-xs animate-bounce-slow"
          />
        </div>
        <div className="flex justify-between items-center">
          <p
            className="text-zinc-600 text-xl font-medium"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </div>
      </div>
    </div>
  );
}
