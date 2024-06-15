import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FileItem from "../../FileComponent/FIleItem/FileItem";
import ViewFileUpload from "../ViewFileUpload/ViewFileUpload";
import { getData } from "../../../api/Data/GetData";
import Flex from "../../Components/Flex/Flex";
import Button from "../../Components/Button/Button";
import { FaCaretDown } from "react-icons/fa";

function MainFeed({ setIsHidden, layouts, creationTime }) {
  const loginUser = useSelector((state) => state.login);
  const [listDocuments, setListDocuments] = useState([]);
  const [details, setDetail] = useState([]);
  const [showMore, setShowMore] = useState(false);
  // load data when user login or open web
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(loginUser);
        if (data) {
          // filter document not is delete
          const filteredData = data.data.filter((item) => !item.isDelete);
          // fitler documetn with creation time
          const sortDocuments = (filteredData, creationTime) => {
            return filteredData.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              if (creationTime === "oldest") {
                // return dateA - dateB;
                console.log(dateA);
              } else if (creationTime === "latest") {
                return dateB - dateA;
              }
            });
          };
          const filter = sortDocuments(filteredData, creationTime);
          // get id detail document
          const filteredIds = filteredData.map((item) => item.id);
          setListDocuments(filter);
          setDetail(filteredIds);
        } else {
          setListDocuments([]);
          setDetail([]);
        }
      } catch (error) {}
    };
    fetchData();
  }, [loginUser.uuId, creationTime]);

  return (
    <div className="border-t-[0.8px] border-[#888] mt-12 pt-12">
      {/* select all */}
      {/* document uploaded */}
      <div className="pt-12 my-12">
        <h4 className="font-semibold text-[1.1rem]">Documents Uploaded</h4>
        <ViewFileUpload />
      </div>
      {/* document created */}
      <div className="border-t-[0.8px] border-[#888] my-12 pt-12">
        <h4 className="font-semibold text-[1.1rem]">Documents Created</h4>
        <Flex justify="between" className="my-8">
          <span className="">Total: {listDocuments.length}</span>
          <Button
            className={`text-white bg-[#3CB371] `}
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            View all
            <FaCaretDown
              className={`${
                showMore ? " rotate-180" : ""
              } transition-all duration-300`}
            />
          </Button>
        </Flex>
        <div
          className={`w-[100%] mb-[40px] mt-12 gap-y-[12px] ${
            showMore
              ? "h-[100%] grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-[2%] "
              : "h-[160px] md:h-[180px] lg:h-[220px]  flex gap-x-[2%] items-center flex-nowrap justify-start  overflow-x-scroll "
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
      </div>
      {/* modal */}
    </div>
  );
}

export default MainFeed;
