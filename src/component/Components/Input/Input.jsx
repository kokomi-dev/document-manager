import React from "react";
const Input = ({ label, value, type, name, onChange, onKeyDown }) => {
  const props = { onChange, onKeyDown };
  return (
    <div className="relative w-[100%] h-[42px] mb-[24px] z-[1]">
      <input
        value={value}
        type={type}
        id={name}
        autoComplete="off"
        {...props}
        className="w-full h-full block px-4 z-10 pb-2.5 pt-4  text-[1rem] text-[#333] bg-transparent rounded-[6px] border-[0.5px] border-[#888] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={name}
        className="absolute text-[1.1rem] z-10 text-[#666] dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2  origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
