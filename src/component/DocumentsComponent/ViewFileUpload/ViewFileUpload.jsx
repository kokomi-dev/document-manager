import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../../../api/Firebase/Firebase";
import { FcFolder } from "react-icons/fc";
import { FaCaretDown } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

import Button from "../../Components/Button/Button";
import Flex from "../../Components/Flex/Flex";
const ViewFileUpload = () => {
  const loginUser = useSelector((state) => state.login);
  const [documents, setDocuments] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const listRef = storage.ref(`data/${loginUser.uuId}`);
        const res = await listRef.listAll();
        const metadataPromises = res.items.map((itemRef) =>
          itemRef.getMetadata()
        );
        const metadataArray = await Promise.all(metadataPromises);
        setDocuments(metadataArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocuments();
  }, [loginUser.uuId]);
  const handleDownloadFile = (name) => {
    const storageRef = storage.ref(`data/${loginUser.uuId}`);
    storageRef
      .child(name)
      .getDownloadURL()
      .then((url) => {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    // grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[2%] gap-y-[2%] lg:gap-y-0
    <div className="w-[100%] h-[100%]">
      <Flex justify="between" className="my-8">
        <span>Total: {documents.length}</span>
        <Button
          className="text-white bg-[#3CB371] "
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          View all
          <FaCaretDown
            className={`${
              showMore ? " rotate-180" : ""
            } transition-all duration-300`}
          />
        </Button>
      </Flex>
      <ul
        className={`w-[100%]  transition-all duration-500  ${
          showMore
            ? "h-[100%] grid-cols-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-[2%]"
            : "h-[140px] md:h-[160px] lg:h-[200px] flex gap-x-[2%] items-center justify-start overflow-x-scroll flex-nowrap"
        }`}
      >
        {documents.map((doc, index) => (
          <li
            to={`/documents/upload/${doc.id}`}
            key={index}
            className="min-w-[20%] w-[100%]  h-[140px] md:h-[160px] lg:h-[200px] relative overflow-hidden flex items-center justify-start flex-col  cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <FcFolder className="text-[5rem]" />
            <h5 className="w-[75%] text-[1rem] text-center  truncate  ">
              {doc.name}
            </h5>
            <h6 className="text-[0.9rem] text-black-2">{doc.size} (Kb)</h6>
            <MdDownload
              className="absolute top-[1%] right-[2%] text-[1.2rem] md:text-[1.3rem] lg:text-[1.6rem]  cursor-pointer text-black-2"
              onClick={() => {
                handleDownloadFile(doc.name);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFileUpload;
