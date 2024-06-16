import React, { useEffect, useState } from "react";

import { storage } from "../../api/Firebase/Firebase";
import { useSelector } from "react-redux";
import SweetAlert2 from "react-sweetalert2";
import { MdFileUpload } from "react-icons/md";
import { LuFolderPlus } from "react-icons/lu";
import { LuFolderCheck } from "react-icons/lu";

import Button from "../Components/Button/Button";
import Flex from "../Components/Flex/Flex";
import { Fragment } from "react";
const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [swalProps, setSwalProps] = useState({});
  const loginUser = useSelector((state) => state.login);
  useEffect(() => {
    setSwalProps({ show: false });
  }, []);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    if (!file) {
      setSwalProps({
        show: true,
        title: "Please choose file",
        text: "Back",
      });
      return;
    }
    const storageRef = storage.ref(`data/${loginUser.uuId}/${file.name}`);
    storageRef
      .put(file)
      .then(() => {
        setSwalProps({
          show: true,
          title: "Upload document success",
          text: "Back",
        });
        setFile("");
      })
      .catch(() => {
        console.log("upload file error");
      });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    if (droppedFiles) {
      setFile(droppedFiles[0]);
    }

    // Here we'll handle the dropped files
  };
  return (
    <Fragment>
      {/* drag and drop file */}
      <div
        onDrop={handleDrop}
        className={`w-[100%] h-[120px] md:h-[160px] lg:h-[180px] border-[1px] border-[#888]  flex items-center justify-center my-12 ${
          file ? "border-solid cursor-no-drop" : "border-dashed cursor-alias"
        }`}
      >
        {file ? (
          <>
            <LuFolderCheck className="text-[1.9rem]" />
          </>
        ) : (
          <Flex justify="center" className="flex-col ">
            <LuFolderPlus className="text-[1.8rem]" />
            Drag and drop files here
          </Flex>
        )}
      </div>
      <Flex justify="between" className="w-[100%] px] my-24">
        <input
          id="input__file"
          className="input__file hidden"
          type="file"
          onChange={handleChange}
        />
        <label
          htmlFor="input__file"
          className="w-[40%] md:w-[40%] lg:w-[30%] h-[38px]  shadow-lg bg-white-2  flex items-center justify-center text-black cursor-pointer"
        >
          Select upload file
          <MdFileUpload className="text-[1.4rem]" />
        </label>
        <Button
          onClick={handleUpload}
          justify="center"
          className="bg-[#1E90FE] w-[30%] lg:w-[20%] "
        >
          Upload
        </Button>
      </Flex>
      <div className="w-[100%]">
        <table className="w-[100%]">
          <thead>
            <tr>
              <th className="text-center w-[40%]">File name:</th>
              <th className="text-center">Size (kb)</th>
              <th className="text-center">Created at</th>
            </tr>
          </thead>
          <tbody>
            {file ? (
              <tr className="w-[100%]">
                <td className="text-center   ">{file.name}</td>
                <td className="text-center">{file.size}</td>
                <td className="text-center">
                  {file.lastModifiedDate.getDate()}/
                  {file.lastModifiedDate.getMonth()}/
                  {file.lastModifiedDate.getFullYear()}
                </td>
              </tr>
            ) : (
              <tr className="block underline  font-[400] w-[100%]">
                <td>No file choose</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <SweetAlert2 {...swalProps} />
    </Fragment>
  );
};
export default UploadFile;
