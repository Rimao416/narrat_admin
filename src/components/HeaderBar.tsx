import React from "react";
import Input from "./Input/Input";
interface HeaderBarProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    children: React.ReactNode;
  }
const HeaderBar: React.FC<HeaderBarProps> = ({
  placeholder,
  onChange,
  name,
  children,
}) => {
  return (
    <div className="headerBar">
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
      {children}
    </div>
  );
};
export default HeaderBar;
