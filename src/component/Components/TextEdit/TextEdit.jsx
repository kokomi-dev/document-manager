import React, { useState, useEffect } from "react";
import "./textedit.scss";

const TextEdit = ({
  value,
  handleChange,
  optionsFile,
  handleOptionsChange,
}) => {
  const { isBold, isItalic, isUnderline, fontSize } = optionsFile;
  //
  const [bold, setBold] = useState(isBold);
  const [italic, setItalic] = useState(isItalic);
  const [underline, setUnderline] = useState(isUnderline);
  const [size, setIsSize] = useState(fontSize);
  useEffect(() => {
    const updatedOptions = {
      bold,
      size,
      italic,
      underline,
    };
    handleOptionsChange(updatedOptions);
  }, [bold, size, italic, underline]);
  return (
    <div className="w-[100%] h-[100%] border-[0.5px] border-[#888] transtion-all duration-300 ">
      {/* toolbar */}
      <div className="flex items-center justify-start p-4 border-b-[1px] border-[#888]">
        <div
          className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
            bold ? "active" : ""
          }`}
          onClick={() => {
            setBold(!bold);
          }}
        >
          <span>B</span>
        </div>
        <div
          className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
            italic ? "active" : ""
          }`}
          onClick={() => {
            setItalic(!italic);
          }}
        >
          <span className="italic">I</span>
        </div>
        <div
          className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
            underline ? "active" : ""
          }`}
          onClick={() => {
            setUnderline(!underline);
          }}
        >
          <span className="underline">U</span>
        </div>
        <div
          className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer `}
          onClick={() => {}}
        >
          Size :
          <input
            value={size}
            className="border-[1px] border-[#888] w-[60px] rounded-6 px-[3px] outline-none"
            type="number"
            onChange={(e) => {
              setIsSize(e.target.value);
            }}
          />
        </div>
      </div>
      {/* content */}
      <textarea
        style={{
          fontSize: `${size}px`,
          fontWeight: italic ? "normal" : bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          textDecoration: underline ? "underline" : "none",
        }}
        className={`w-[100%] h-[100vh] p-4  `}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TextEdit;
