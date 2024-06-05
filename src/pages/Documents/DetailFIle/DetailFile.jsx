import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../api/Data/GetData";
// loading
import Loading from "../../../component/Components/Loading/Loading";
import MainDetail from "../../../component/DetailFileComponent/MainDetail/MainDetail";
import Flex from "../../../component/Components/Flex/Flex";
// main detail
const DetailFile = () => {
  const [file, setFile] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isParam, setIsParam] = useState(null);
  const [acitonTriger, setActionTriger] = useState(false);
  const loginUser = useSelector((state) => state.login);
  const { id } = useParams();
  useEffect(() => {
    const getFileCheck = async () => {
      try {
        const data = await getData(loginUser);
        await data.idKey.forEach((item, index) => {
          if (item === id) {
            setIsParam(item);
            setFile(data.data[index]);
            setIsLoading(false);
          }
        });
      } catch {}
    };
    getFileCheck();
  }, [acitonTriger, id, loginUser]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="min-w-full h-ful py-6">
      <Flex justify="between" className="border-b-[0.5px] border-[#888]">
        <h1 className="text-[1.6rem] font-semibold">Dashboard</h1>
      </Flex>
      <MainDetail
        data={file}
        edit={{ isEdit, setIsEdit }}
        loginUser={loginUser}
        param={isParam}
        onAction={() => {
          setActionTriger(true);
        }}
      />
    </div>
  );
};

export default DetailFile;
