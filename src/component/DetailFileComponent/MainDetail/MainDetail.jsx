import React, { useState, useCallback } from "react";
import Button from "../../Components/Button/Button";
import Flex from "../../Components/Flex/Flex";
import TextEdit from "../../Components/TextEdit/TextEdit";
// icon
import { MdEditSquare } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  UpdateFile,
  RemoveFileTemporary,
  FavoritesFile,
} from "../../../api/File/CRUD";
const MainDetail = ({ data, edit, loginUser, param, onAction }) => {
  const { fileName, content, createdAt, updatedAt, options } = data;
  const { fontSize, isItalic, isBold, isUnderline } = options;
  const { isEdit, setIsEdit } = edit;
  const [isFavorite, setIsFavorite] = useState(false);
  const [editableContent, setEditableContent] = useState(content);
  const [editableName, setEditableName] = useState(fileName);
  const [changeOptions, setChangeOptions] = useState({});
  const handleUpdate = async () => {
    try {
      setIsEdit(false);
      UpdateFile(
        data,
        editableContent,
        editableName,
        changeOptions,
        loginUser,
        param
      );
      onAction();
    } catch {}
  };
  const handleDelete = () => {
    RemoveFileTemporary(loginUser, param, true);
    window.location.reload();
  };
  const handleOptionsChange = useCallback(
    ({ bold, italic, underline, size }) => {
      setChangeOptions({
        bold,
        italic,
        underline,
        size,
      });
    },
    []
  );
  const handleFavorite = () => {
    FavoritesFile(data, true, loginUser, param);
    setIsFavorite(true);
  };
  return (
    <div className="w-full h-full transition-all duration-300 mt-12">
      {/* head */}
      <Flex justify="between" className="w-full  mb-24">
        {/* button back */}
        <Link
          to="/documents"
          justify="center"
          className="bg-white-2 border-[1px] border-[#888] h-[38px] w-[90px] flex items-center justify-center rounded-6 hover:opacity-80 "
        >
          <TbArrowBackUp className="mr-4 text-black-2 text-[1.2rem]" />
        </Link>
        {/* button edit and download document */}
        <Flex justify="center">
          {isEdit ? (
            <Button
              className="bg-blue text-white mr-8"
              justify="center"
              onClick={handleUpdate}
            >
              <FaSave className="mr-4" />
              Save
            </Button>
          ) : (
            <>
              <Button
                className="bg-blue text-white mr-8"
                justify="center"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <MdEditSquare className="mr-4 text-[1.1rem]" />
                Edit
              </Button>
              <Button className="text-white button__green" justify="center">
                <FaFileDownload className="mr-4" />
                Download
              </Button>
              <Button
                className="text-white bg-aside ml-8"
                justify="center"
                onClick={() => {
                  window.print();
                }}
              >
                <FaPrint className="mr-4" />
                Print
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      {/* file name */}
      <textarea
        readOnly={isEdit ? false : true}
        value={editableName}
        autoFocus
        className={`w-[100%] border-[0.5px] border-[#888] rounded-6 capitalize p-4 font-bold text-[1.2rem] ${
          isEdit ? "outline" : "outline-none"
        }`}
        onChange={(e) => {
          setEditableName(e.target.value);
        }}
      ></textarea>
      {/* favorites and time */}
      <Flex justify="between" className="my-12">
        {/* icon favorites */}
        <div
          onClick={handleFavorite}
          className="cursor-pointer flex items-center justify-start mt-8"
        >
          {isFavorite ? (
            <FaHeart className="text-[1.3rem] text-red" />
          ) : (
            <FaRegHeart className="text-[1.3rem] " />
          )}
        </div>
        {/* time */}
        <div>
          <h6 className="text-black-2 text-[0.9rem]">
            <span className="text-green mr-4">Created At:</span> {createdAt}
          </h6>
          <h6 className="text-black-2 text-[0.9rem]">
            <span className="text-green mr-4"> Updated At:</span>
            {updatedAt ? updatedAt : <span>Haven't updated yet</span>}
          </h6>
        </div>
      </Flex>
      {/* content */}
      {isEdit ? (
        <TextEdit
          optionsFile={options}
          value={editableContent}
          handleChange={(data) => {
            setEditableContent(data);
          }}
          handleOptionsChange={handleOptionsChange}
        />
      ) : (
        <textarea
          readOnly
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: isItalic ? "normal" : isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
          }}
          className={`w-[100%] h-[100vh] mt-12 border-[0.5px] border-[#888] p-4 leading-7 tracking-wide rounded-6 text-justify outline-none
          `}
          value={editableContent}
        />
      )}
      {/* button move to trash */}
      <Button
        justify="center"
        className="bg-white text-red border-red border-[0.5px] opacity-100 hover:opacity-60 mt-24"
        onClick={handleDelete}
      >
        <FaTrash className="mr-4 text-[0.9rem]" />
        Move to trash
      </Button>
    </div>
  );
};

export default MainDetail;
