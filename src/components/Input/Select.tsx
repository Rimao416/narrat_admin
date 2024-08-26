interface SelectProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ name, onChange, children }) => {
  return (
    <select name={name} onChange={onChange} id="" className="input">
      {children}
    </select>
  );
};

export default Select;
