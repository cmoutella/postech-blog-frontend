import { ReactNode } from "react";

type ModalProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actions: ReactNode;
  close: () => void;
};

export const Modal = ({
  actions,
  description,
  icon,
  title,
  close,
}: ModalProps) => {
  return (
    <div className="h-full w-full top-0 left-0 bg-slate-900 bg-opacity-50 flex justify-center items-center fixed">
      <div className="container flex justify-center items-center">
        <div className="bg-white pt-8 px-6 pb-6 rounded-md min-w-fit max-w-md min-h-72 flex flex-col justify-start items-start gap-1 text-slate-900">
          {icon && <span>{icon}</span>}
          <p className="text-3xl mb-4 font-semibold">{title}</p>
          <p className="text-base">{description}</p>
          <div className="self-end mt-auto">{actions}</div>
        </div>
      </div>
    </div>
  );
};
