import React from "react";

function OverLay({ isHidden, onClick }) {
  const props = { onClick };
  return (
    <div
      {...props}
      className="w-full h-full fixed top-0 left-0 bottom-0 right-0 cursor-pointer bg-[rgba(0,0,0,0.35)] z-[10] transition-all"
      hidden={isHidden}
    ></div>
  );
}

export default OverLay;
