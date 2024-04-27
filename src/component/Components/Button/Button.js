import React from "react";

const Button = ({ children, justify, className, onClick, type }) => {
  const props = { onClick, type };
  return (
    <button
      {...props}
      className={`flex items-center min-w-[100px] hover:opacity-70 min-h-[36px] text-[1rem] p-[4px] px-[8px] transition-all duration-300 rounded-[6px] justify-${justify} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
