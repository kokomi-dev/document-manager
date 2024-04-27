import React from "react";

const Flex = ({ justify, children, className, onClick }) => {
  const props = { onClick };
  return (
    <div
      {...props}
      className={` ${className} flex items-center justify-${justify}`}
    >
      {children}
    </div>
  );
};

export default Flex;
