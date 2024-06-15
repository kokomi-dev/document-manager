import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateFile } from "../../api/File/CRUD";
import { v4 } from "uuid";
import Button from "../../component/Components/Button/Button";
import Flex from "../../component/Components/Flex/Flex";
import Input from "../../component/Components/Input/Input";
import UploadFile from "../../component/UploadFile/UploadFile";
import SweetAlert2 from "react-sweetalert2";

const CreateDoc = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("pdf");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [size, setIsSize] = useState(16);
  const [error, setError] = useState(false);
  const [mess, setMess] = useState({});
  useEffect(() => {
    setMess({ show: false });
  }, []);
  const handleCreateDoc = async () => {
    if ((!name && name === "") || content === "") {
      setError(true);
      setMess({
        show: true,
        title: "Fill in all field information",
      });
      return;
    }
    try {
      const newFile = {
        id: v4(),
        fileName: name,
        content: content,
        describe: describe,
        createdAt: new Date().toLocaleDateString("en-GB"),
        updatedAt: null,
        type: type,
        size: null,
        isDelete: false,
        isFavorite: false,
        options: {
          isBold: bold,
          isUnderline: underline,
          isItalic: italic,
          fontSize: size,
        },
      };
      await CreateFile(newFile, loginUser);
      setMess({
        show: true,
        title: "Create document success",
      });
      navigate(`/documents`);
    } catch {
      console.log("error create");
    }
  };
  // const handleKeyDown = (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     handleCreateDoc();
  //   }
  // };
  return (
    <div className="w-full min-w-[100%] h-[100%] pt-6 z-[1] ">
      <div className="flex-1 w-full h-full ">
        <h1 className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold border-b-[0.5px] border-[#888]">
          Create Document
        </h1>
        <Flex justify="start" className="w-[100%] h-[3rem] mt-12">
          <Flex
            justify="start"
            className="w-[100%] h-[100%] text-black-2 bg-[#FEF3CC] text-[1rem]  px-4 "
          >
            Document add to:
            <span className="text-black ml-4">{loginUser.userName}</span>
          </Flex>
        </Flex>
        {/* create document */}
        <div className="w-[100%] h-[[100%]] mt-12 border-t-[0.5px] border-[#888] py-12">
          {/* note */}
          <p className="bg-white-2 p-4 rounded-6 text-[#333]">
            *Note:Please completely fill in the information boxes below to
            ensure your documents are uploaded most accurately. Your documents
            are completely secure and private so only you can see the documents
            you have uploaded.
          </p>
          {/* upload file */}
          <div className="w-[100%] h-[100%] my-24 ">
            <h4 className="text-center font-bold text-[1.4rem]">Upload File</h4>
            <UploadFile />
          </div>
          {/* create file */}
          <div className="w-full h-full  flex-col  mt-12 py-12">
            <p className="bg-white-2 p-4 rounded-6 text-[#333]">
              *Note: Once you create the data above, you will not be able to
              download it. Sorry for the inconvenience, but we are trying to
              improve as soon as possible.
            </p>
            <div className="my-12">
              <h4 className="text-center font-bold text-[1.4rem]">
                Create File Document
              </h4>
              <label htmlFor="document__type">Type Document:</label>
              <select
                id="document__type"
                className="mb-12 ml-4 outline-[#FFA400]"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="pdf">PDF</option>
                <option value="docx">DOCX</option>
                <option value="txt">TXT</option>
              </select>
            </div>
            <div>
              <Input
                label="Name "
                type="text"
                id="document__name"
                onChange={(e) => {
                  setName(e.target.value);
                  setError(false);
                }}
              />
              <Input
                label="Describe "
                type="text"
                id="document__describe"
                onChange={(e) => {
                  setDescribe(e.target.value);
                  setError(false);
                }}
              />
              <h5 className="mb-12 text-black-2 text-[0.9rem]">
                Creation time: {new Date().toLocaleDateString("en-GB")}
              </h5>
              <h4 className="text-[1.1rem] block">Document content:</h4>
              {/* content */}
              <div className="w-[100%] h-[100%] mt-12 border-[0.5px] border-[#888] transtion-all duration-300 ">
                {/* toolbar */}
                <div className="flex items-center justify-start p-4 border-b-[1px] border-[#888]">
                  <div
                    className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
                      bold ? "active" : ""
                    }`}
                    onClick={() => {
                      setBold(!bold);
                    }}
                  >
                    <span>B</span>
                  </div>
                  <div
                    className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
                      italic ? "active" : ""
                    }`}
                    onClick={() => {
                      setItalic(!italic);
                    }}
                  >
                    <span className="italic">I</span>
                  </div>
                  <div
                    className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer ${
                      underline ? "active" : ""
                    }`}
                    onClick={() => {
                      setUnderline(!underline);
                    }}
                  >
                    <span className="underline">U</span>
                  </div>
                  <div
                    className={`toolbal__options font-medium p-[2px] text-[1.1rem] mr-8 hover:text-blue cursor-pointer `}
                    onClick={() => {}}
                  >
                    Size :
                    <input
                      value={size}
                      className="border-[1px] border-[#888] w-[60px] rounded-6 px-[3px] outline-none"
                      type="number"
                      onChange={(e) => {
                        setIsSize(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* content */}
                <textarea
                  style={{
                    fontSize: `${size}px`,
                    fontWeight: italic ? "normal" : bold ? "bold" : "normal",
                    fontStyle: italic ? "italic" : "normal",
                    textDecoration: underline ? "underline" : "none",
                  }}
                  className={`w-[100%] min-h-[30vh] h-[100%] p-4 outline-none `}
                  id="document__content"
                  spellCheck="true"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
            </div>
            {error && (
              <span className="text-red italic text-[0.8rem] pt-[4px]">
                Fill in all field information
              </span>
            )}
            <div className="w-[100%] flex items-center justify-center mt-24">
              <Button
                justify="center"
                className="bg-[#FF6048] w-full text-white  mr-8"
                onClick={() => {
                  setName("");
                }}
              >
                Cancel
              </Button>
              <Button
                justify="center"
                className="w-full button__blue text-white"
                type="button"
                onClick={handleCreateDoc}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>
      <SweetAlert2 {...mess} />
    </div>
  );
};

export default CreateDoc;
