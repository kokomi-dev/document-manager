import React from "react";
// scss
import "./fileitem.scss";
import Flex from "../../Components/Flex/Flex";
import { Link } from "react-router-dom";
function FileItem({ layouts, data, detail }) {
  const { id, content, fileName, createdAt, updatedAt } = data;
  // state
  return (
    <Link
      className={`item__file min-w-[30%] lg:min-w-[20%] w-[100%] hover:shadow-2xl h-[160px] md:h-[180px] lg:h-[220px] border-[0.2px] bg-white  border-black-2 shadow rounded-6 p-4  cursor-pointer  transition-all duration-300`}
      data-id={id}
      to={{
        pathname: `/documents/files/${detail}`,
        state: { data },
      }}
    >
      {/* header */}
      <div className="w-[100%] h-[10%] ">
        <h3 className="w-[80%] text-[1.1rem] font-semibold z-[10] capitalize truncate">
          {fileName}
        </h3>
      </div>
      {/* show preview content */}
      <Flex
        justify="center"
        className="w-full h-[75%] md:h-[60%] lg:h-[60%] xl:h-[70%] "
      >
        <div className="w-[100%] h-[70%] lg:h-[50%] text-ellipsis  overflow-hidden text-white3  ">
          {content ? (
            <p className="w-[80%] h-[70%]  text-ellipsis  block">{content}</p>
          ) : (
            <span className="block  underline italic">No content!</span>
          )}
        </div>
      </Flex>
      {/* createAt */}
      <Flex justify="between" className="h-[15%] leading-3 lg:leading-5">
        <h6 className="text-[0.8rem] lg:text-[0.9rem] text-green">
          Created At: {createdAt}
        </h6>
      </Flex>
      <Flex
        justify="between"
        className="my-[4px] hidden md:block lg:block leading-3 lg:leading-5 "
      >
        <h6 className="text-[0.8rem] lg:text-[0.9rem] text-blue">
          Updated At: {updatedAt}
        </h6>
      </Flex>
    </Link>
  );
}

export default FileItem;
