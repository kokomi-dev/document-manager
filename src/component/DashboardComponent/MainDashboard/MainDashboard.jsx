import React, { useEffect, useState } from "react";
import { getData } from "../../../api/Data/GetData";
import { useSelector } from "react-redux";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
const MainDashboard = () => {
  const loginUser = useSelector((state) => state.login);
  const [numberUploaded, setNumberUploaded] = useState(null);
  const [numberTrash, setNumberTrash] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getData(loginUser);
      try {
        if (data) {
          const res = data.data.filter((item) => {
            if (item.isDelete === false) {
              return item;
            } else {
              return;
            }
          });
          setNumberUploaded(res.length);
          const trash = data.data.filter((item) => {
            if (item.isDelete === true) {
              return item;
            } else {
              return;
            }
          });
          setNumberTrash(trash.length);
        }
      } catch {}
    };
    fetch();
  }, []);
  return (
    <>
      <div className="w-[100%] h-[460px] md:h-[260px] my-6 pt-6 grid grid-cols-1 gap-y-[8%] md:gap-y-0 md:grid-cols-2 lg:grid-cols-3 gap-x-[8%]">
        {/* box show number document and trash */}
        <div className="bg-white shadow-xl w-[100%] h-[100%] rounded-6 flex items-center justify-center flex-col">
          <IoDocumentTextSharp className="text-[1.6rem]" />
          <h4 className=" mt-6 text-[1.2rem] font-semibold">Documents</h4>
          <div className=" font-bold w-[36px] h-[36px] rounded-[180px] flex items-center justify-center bg-aside mt-12 ">
            <span className="text-[1.3rem] text-white">{numberUploaded}</span>
          </div>
        </div>
        <div className="bg-white shadow-xl w-[100%] h-[100%] rounded-6 flex items-center justify-center flex-col">
          <FaTrash className="text-[1.5rem]" />
          <h4 className=" mt-6 text-[1.2rem] font-semibold">In Trash</h4>
          <div className=" font-bold w-[36px] h-[36px] rounded-[180px] flex items-center justify-center bg-aside mt-12 ">
            <span className="text-[1.3rem] text-white">{numberTrash}</span>
          </div>
        </div>
      </div>
      {/* show documents day in month */}
      <div className="pt-6">
        <h3 className="text-[1.2rem]">
          Number of documents uploaded this month
        </h3>
      </div>
    </>
  );
};

export default MainDashboard;
