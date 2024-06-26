import React from "react";

const Button = ({ children, justify, className, onClick, type }) => {
  const props = { onClick, type };
  return (
    <button
      {...props}
      className={`flex items-center  hover:opacity-70  text-[1rem] py-[6px] px-[8px] transition-all duration-300 rounded-[6px] justify-${justify} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
