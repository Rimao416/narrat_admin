import React from "react";
export interface ButtonProps {
  Icon: React.ComponentType;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  Icon,
  className = "btn-green",
  onClick,
}) => {
  return (
    <div className={className} onClick={onClick}>
      <Icon />
    </div>
  );
};
export default Button;
