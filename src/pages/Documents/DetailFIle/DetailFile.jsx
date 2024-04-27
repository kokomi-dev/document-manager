import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../api/Data/GetData";
// loading
import Loading from "../../../component/Components/Loading/Loading";
import MainDetail from "../../../component/DetailFileComponent/MainDetail/MainDetail";
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
    <div className="min-w-full h-ful min-h-[100%] py-6">
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
