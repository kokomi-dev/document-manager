import React, { useEffect, useState } from "react";
import { getData } from "../../../api/Data/GetData";
import { useSelector } from "react-redux";
import Flex from "../../Components/Flex/Flex";
const WrapPreviewInfo = ({ title, bg, count }) => {
  return (
    <div
      className={`w-[100%] h-[120px] font-[300] rounded-6 ${bg} pl-12 flex justify-start items-center`}
    >
      <div className="w-full ">
        <h4 className="mt-6 text-[1.2rem] font-[400]">{title}</h4>
        <div className=" font-bold w-[26px] h-[26px] rounded-[180px] flex items-center justify-center bg-white mt-12 ">
          <span className="text-[1rem] text-black">{count}</span>
        </div>
      </div>
    </div>
  );
};
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
    <div className="w-[100%] h-[100%] mt-12 ">
      <Flex justify="start" className="w-[100%] h-[3rem]">
        <Flex
          justify="start"
          className="w-[100%] h-[100%] text-black-2 bg-[#FEF3CC] text-[1rem]  px-4 "
        >
          Logined in successfully
        </Flex>
      </Flex>
      <div className="w-full h-auto border-t-[0.8px] border-b-[0.8px] border-[#888] py-12 mt-12">
        <h4 className="mb-4 text-[1.1rem]">Overview</h4>
        <div className="w-[100%] h-[100%] md:h-[100%]  grid grid-cols-2 gap-y-[2%] md:gap-y-[3%] md:grid-cols-3 lg:gap-y-[0] lg:grid-cols-4 gap-x-[1%]">
          {/* box show number document and trash */}
          <WrapPreviewInfo
            title="Documents"
            bg="bg-[#1E90FE]"
            count={numberUploaded}
          />
          <WrapPreviewInfo
            title="Documents in trash"
            bg="bg-[#FFA400]"
            count={numberTrash}
          />
          <WrapPreviewInfo title="Uploaded" bg="bg-[#6A5ACD]" count="3" />
          <WrapPreviewInfo title="Shared" bg="bg-[#FF6048]" count="1" />
        </div>
      </div>
      <div className=" border-b-[0.8px] border-[#888] py-12 mt-8">
        <h4 className="mb-4 text-[1.1rem]">Recently</h4>
        <div className="w-[100%] h-[120px] md:h-[140px]  grid grid-cols-2 gap-y-[2%] md:gap-y-[1%] md:grid-cols-3 lg:grid-cols-4 gap-x-[1%]">
          <WrapPreviewInfo
            title="Uploaded this month"
            bg="bg-[#3CB371]"
            count="8"
          />
        </div>
      </div>
      <div className=" border-b-[0.8px] border-[#888] py-12 mt-8">
        <h6 className="mb-4 text-[1.1rem]">Info your account</h6>
        <div className="w-[100%]  h-full pl-12 text-black-2 text-[1rem]">
          <h4 className="mb-4">Login with account: {loginUser.userName}</h4>
          <h4 className="mb-4">ID : {loginUser.uuId}</h4>
          <div className="mb-4">
            <h5>Creation time: {loginUser.metaData.creationTime}</h5>
            <h5>Lat login time : {loginUser.metaData.lastSignInTime}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
