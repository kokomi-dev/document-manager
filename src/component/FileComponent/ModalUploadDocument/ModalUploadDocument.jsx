import React, { useState, useEffect, memo } from "react";
import Button from "../../Components/Button/Button";
import { CreateFile } from "../../../api/File/CRUD";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ModalUploadDocument = memo(function ModalUploadDocument({
  isHidden,
  setIsHidden,
}) {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
  }, [isHidden]);

  const handleCreateDoc = async () => {
    if (!name && name === "") {
      setError(true);
      return;
    }
    try {
      const newFile = {
        id: v4(),
        fileName: name,
        content: "",
        createdAt: new Date().toLocaleDateString("en-GB"),
        updatedAt: null,
        type: null,
        size: null,
        isDelete: false,
        isFavorite: false,
        options: {
          isBold: false,
          isUnderline: false,
          isItalic: false,
          fontSize: "16",
        },
      };
      await CreateFile(newFile, loginUser);
      setIsHidden(false);
      setName("");
      navigate(`/documents/files/${newFile.id}`);
    } catch {
      console.log("error create");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleCreateDoc();
    }
  };
  return (
    <div
      className={` w-[90%] lg:w-[50%] h-[180px] fixed top-[40%] left-[50%] translate-x-[-50%] bg-white-2 z-[999] rounded-6 transition-all duration-300 ${
        isHidden
          ? "translate-y-[-150%] opacity-0 invisible"
          : "translate-y-[-50%] opacity-1 visible "
      }`}
    >
      <div className="flex items-center justify-center flex-col">
        <label htmlFor="name" className="my-12 text-[1.1rem]">
          Name:
        </label>
        <input
          id="name"
          placeholder="...aaa"
          value={name}
          autoFocus
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className="border-[1px] border-[#888] w-[70%] md:w-[60%] lg:w-[40%] outline-none rounded-6 p-2"
        />
        {error && (
          <span className="text-red italic text-[0.8rem] pt-[4px]">
            Name != ""
          </span>
        )}
        <div className="w-[100%] flex items-center justify-center mt-24">
          <Button
            justify="center"
            className="bg-white  mr-8"
            onClick={() => {
              setIsHidden(true);
              setName("");
            }}
          >
            Cancel
          </Button>
          <Button
            justify="center"
            className="button__blue text-white"
            type="button"
            onClick={handleCreateDoc}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
});
export default ModalUploadDocument;
