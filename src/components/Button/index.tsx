import React from "react";

function Button({
  color,
  onClick,
  children,
}: {
  color: string;
  onClick?: () => void;  
  children: React.ReactNode;
}) {
  return <button className={`rounded px-5 py-2 ${color}`} onClick={onClick}>{children}</button>;
}

export default Button;
