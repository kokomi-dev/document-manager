import React from "react";
// scss
import "./fileitem.scss";
import Flex from "../../Components/Flex/Flex";
import { Link } from "react-router-dom";
function FileItem({ layouts, data, detail }) {
  const { id, content, fileName, createdAt, updatedAt, options } = data;
  const { isBold, isUnderline, isItalic, fontSize } = options;
  // state
  return (
    <Link
      className={`item__file  w-[100%] hover:shadow-lg ${
        layouts === "grid_layout" ? "h-[320px]" : "h-[180px] py-[4px]"
      }  border-[0.2px] bg-white  border-black-2 shadow rounded-6 p-4  cursor-pointer  transition-all duration-300`}
      data-id={id}
      to={{
        pathname: `/documents/files/${detail}`,
        state: { data },
      }}
    >
      {/* header */}
      <div className="h-[10%] ">
        <h3 className="text-[1.1rem] font-semibold z-[10] capitalize">
          {fileName}
        </h3>
      </div>
      {/* show preview content */}
      <Flex
        justify="center"
        className="w-full h-[65%] md:h-[60%] lg:h-[60%] xl:h-[70%] "
      >
        <div className=" text-ellipsis  overflow-hidden text-white3 h-[50%] ">
          {content ? (
            <p
              className=""
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: isItalic ? "normal" : isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: isUnderline ? "underline" : "none",
              }}
            >
              {content}
            </p>
          ) : (
            <span className="underline italic">No content!</span>
          )}
        </div>
      </Flex>
      {/* createAt */}
      <Flex justify="between" className="h-[15%]">
        <h6 className="text-[0.9rem] text-green">Created At: {createdAt}</h6>
      </Flex>
      <Flex justify="between" className="mb-[8px]">
        <h6 className="text-[0.9rem] text-blue">Updated At: {updatedAt}</h6>
      </Flex>
    </Link>
  );
}

export default FileItem;
