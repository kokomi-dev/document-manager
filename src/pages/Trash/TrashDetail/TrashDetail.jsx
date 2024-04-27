import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from "../../../api/Data/GetData";
import Loading from "../../../component/Components/Loading/Loading";
import Flex from "../../../component/Components/Flex/Flex";
import Button from "../../../component/Components/Button/Button";
import { RestoreFile } from "../../../api/File/CRUD";
import ModalConfirmDelete from "../../../component/TrashComponent/ModalConfirmDelete/ModalConfirmDelete";
import OverLay from "../../../component/Components/OverLay/OverLay";
// icon
import { MdEditSquare } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const TrashDetail = () => {
  const [file, setFile] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(true);

  const loginUser = useSelector((state) => state.login);
  const { id } = useParams();
  const { fileName, content, createdAt, updateAt } = file;

  useEffect(() => {
    const getFileCheck = async () => {
      try {
        const data = await getData(loginUser);
        await data.idKey.forEach((item, index) => {
          if (item === id) {
            setFile(data.data[index]);
            setIsLoading(false);
          }
        });
      } catch {
        console.log("error");
      }
    };
    getFileCheck();
  }, [id, loginUser]);

  if (isLoading) {
    return <Loading />;
  }
  const handleRestore = async () => {
    try {
      await RestoreFile(file, loginUser, id);
      window.location.reload();
    } catch {
      console.log("Lỗi");
    }
  };
  return (
    <div className="w-[100%] h-[100%] py-6">
      {/* button actions */}
      <div className="w-full transition-all duration-300">
        <Flex justify="between" className="w-full  mb-24 ">
          {/* button back */}
          <Link
            to="/dashboard/trash"
            justify="center"
            className="bg-white-2 border-[1px] border-[#888] h-[38px] w-[90px] flex items-center justify-center rounded-6 hover:opacity-80 "
          >
            <TbArrowBackUp className="mr-4 text-black-2 text-[1.2rem]" />
          </Link>
          {/* button restore */}
          <Flex justify="center">
            <Button
              className="button__blue text-white mr-8"
              justify="center"
              onClick={handleRestore}
            >
              <MdEditSquare className="mr-4 text-[1.1rem]" />
              Restore
            </Button>
          </Flex>
        </Flex>
        {/* name */}
        <h3 className="text-[1.4rem] font-bold capitalize">{fileName}</h3>
        <Flex justify="between" className="my-12">
          <div>
            <h6 className="text-black-2 text-[0.9rem]">
              <span className="text-green mr-4">Created At:</span> {createdAt}
            </h6>
            <h6 className="text-black-2 text-[0.9rem]">
              <span className="text-green mr-4"> Updated At:</span>{" "}
              {updateAt ? updateAt : <span>Haven't updated yet </span>}
            </h6>
          </div>
        </Flex>
      </div>
      <div className="mt-[14px]  w-full ">
        <div className="w-[100%] min-h-[100%] border-[0.5px] border-[#888] p-4 leading-7 tracking-wide rounded-6 text-justify">
          {content ? (
            content
          ) : (
            <span className="underline italic ">No content!</span>
          )}
        </div>
        <Button
          justify="center"
          className="bg-red text-white opacity-70 hover:opacity-100 mt-24"
          onClick={() => {
            setIsHidden(false);
          }}
        >
          <MdDeleteForever className="mr-4 text-[1.3rem]" />
          Delete
        </Button>
      </div>
      <ModalConfirmDelete
        id={id}
        loginUser={loginUser}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
      <OverLay
        isHidden={isHidden}
        onClick={() => {
          setIsHidden(true);
        }}
      />
    </div>
  );
};

export default TrashDetail;
