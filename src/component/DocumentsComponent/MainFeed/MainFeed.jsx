import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import FileItem from "../../FileComponent/FIleItem/FileItem";
import { getData } from "../../../api/Data/GetData";
function MainFeed({ setIsHidden, layouts, creationTime }) {
  const loginUser = useSelector((state) => state.login);
  const [listDocuments, setListDocuments] = useState([]);
  const [details, setDetail] = useState([]);
  // load data when user login or open web
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(loginUser);
        if (data) {
          const filteredData = data.data.filter((item) => !item.isDelete);
          const filteredIds = filteredData.map((item) => item.id);
          setListDocuments(filteredData);
          setDetail(filteredIds);
        } else {
          setListDocuments([]);
          setDetail([]);
        }
      } catch (error) {}
    };
    fetchData();
  }, [loginUser.uuId]);
  return (
    <Fragment>
      {/* select all */}
      <div className="mt-12 flex items-center justify-start">
        <span className="font-semibold">
          ({listDocuments.length}) <span>documents</span>
        </span>
      </div>
      {/* render documents  */}
      <div
        className={`mb-[40px] mt-24 gap-y-[20px] ${
          layouts === "grid_layout"
            ? "grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] "
            : "flex flex-col items-center justify-start "
        }`}
      >
        {listDocuments ? (
          listDocuments.map((item, index) => {
            return (
              <FileItem
                layouts={layouts}
                detail={details[index]}
                data={item}
                key={index}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <span className="text-[1.3rem] font-bold mr-[12px]">
              Your empty!
            </span>
            <span
              className="text-blue underline text-[1.1rem] cursor-pointer hover:opacity-70"
              onClick={() => {
                setIsHidden(false);
              }}
            >
              Upload now!
            </span>
          </div>
        )}
      </div>
      {/* modal */}
    </Fragment>
  );
}

export default MainFeed;
