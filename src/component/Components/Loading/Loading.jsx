import React from "react";
import "./loading.scss";
function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 opacity-15  bg-[rgba(0,0,0,0.45)] flex items-center justify-center flex-col z-[15]">
      <div className="loader"></div>
      <span className="mt-8">Đang tải...</span>
    </div>
  );
}

export default Loading;
