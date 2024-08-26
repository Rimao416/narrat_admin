interface InputProps {
  type: string;
  placeholder: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  valeur?: string | number;
}
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  min = 0,
  max = 30,
  onChange,
  name,
  valeur,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      minLength={min}
      maxLength={max}
      onChange={onChange}
      name={name}
      defaultValue={valeur}
    />
  );
};

export default Input;
