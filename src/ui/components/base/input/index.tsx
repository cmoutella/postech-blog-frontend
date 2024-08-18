import { ReactElement } from "react";

interface BaseInputStyleProps {
  labelColor?: string;
}

interface BaseInputProps {
  label: string;
  inputId: string;
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
  required?: boolean;
  styling?: BaseInputStyleProps;
  iconButton?: ReactElement;
  type: string;
}

const defaultStylingProps: BaseInputStyleProps = {
  labelColor: "text-fiap",
};

const Input = ({
  label,
  inputId,
  value,
  placeholder,
  required = false,
  styling = defaultStylingProps,
  onChange,
  iconButton,
  type,
}: BaseInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    onChange(val);
  };

  return (
    <div className="gap-1 flex flex-col w-full">
      <label
        htmlFor={inputId}
        className={`block mb-2 text-sm font-medium ${styling.labelColor} dark:text-white`}
      >
        {label}
      </label>
      <span className="relative">
        <input
          type={type}
          id={inputId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder ?? ""}
          value={value}
          onChange={handleChange}
          required={required}
        />
        {iconButton && (
          <span className="absolute right-2 top-2.5">{iconButton}</span>
        )}
      </span>
    </div>
  );
};

export default Input;
