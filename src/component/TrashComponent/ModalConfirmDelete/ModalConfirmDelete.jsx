import React, { Fragment } from "react";
import Button from "../../Components/Button/Button";
import { RemoveFile } from "../../../api/File/CRUD";
import { CiWarning } from "react-icons/ci";
const ModalConfirmDelete = ({ id, loginUser, isHidden, setIsHidden }) => {
  const handleDelete = async () => {
    try {
      await RemoveFile(loginUser, id);
      window.location.reload();
    } catch {}
  };
  return (
    <Fragment>
      <div
        className={`w-[400px] h-[300px] p-4 flex items-center justify-start flex-col z-[200] bg-white-2 text-black rounded-6 fixed top-[50%] left-[50%] translate-x-[-50%] transition-all duration-300 ${
          isHidden
            ? " translate-y-[-150%] opacity-0 invisible"
            : " translate-y-[-50%] opacity-100 visible"
        }`}
      >
        <h1 className="text-[1.2rem] font-semibold mt-[30px] ">
          Are you sure you want to delete this data
        </h1>
        <div className="flex items-center justify-center mt-[30px]">
          <Button
            justify="center"
            className="bg-white text-black mr-12"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Cancel
          </Button>
          <Button
            justify="center"
            className="button__green text-white "
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
        <h6 className="mt-24 flex items-center justify-center">
          <CiWarning className="text-[#FFCE44] text-[1.5rem]" />
          <span className="text-center">
            Note: Once you click delete, this data cannot be restored
          </span>
        </h6>
      </div>
    </Fragment>
  );
};

export default ModalConfirmDelete;
