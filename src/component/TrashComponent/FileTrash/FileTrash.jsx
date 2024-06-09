import React from "react";
import { Link } from "react-router-dom";
import { RestoreFile } from "../../../api/File/CRUD";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function FileTrash({ data, detail, index, onAction, setIsId, setIsHidden }) {
  const { id, content, fileName, createdAt } = data;
  const loginUser = useSelector((state) => state.login);
  // state
  const handleRetore = async () => {
    try {
      await RestoreFile(data, loginUser, id);
      toast.success(`${fileName} has been restored`);
      onAction();
    } catch {
      console.log("Restore file false");
    }
  };
  return (
    <tr
      key={id}
      className="w-[100%] h-[60px] bg-white shadow rounded-6  transition-all duration-300  "
      data-id={id}
    >
      <td className="w-[5%]">{index}</td>
      <td className="w-[20%]">
        <Link
          to={{
            pathname: `/documents/trash/${detail}`,
            state: { data },
          }}
          className="text-[1.1rem] font-semibold z-[10] cursor-pointer capitalize hover:underline"
        >
          {fileName}
        </Link>
      </td>
      {/* show preview content */}
      <td className="w-[40%] h-[60px] overflow-hidden  max-w-[120px]  ">
        <p className="truncate whitespace-nowrap px-4">
          {content ? content : <span>No content!</span>}
        </p>
      </td>
      {/* createAt */}
      <td className="w-[15%]">
        <h6 className="text-[0.9rem] text-green">{createdAt}</h6>
      </td>
      <td className="w-auto p-[4px] md:p-4 h-[100%] flex flex-col  justify-center items-center ">
        <button
          className="bg-[#3CB371] w-[95%] px-[4px] md:w-[80%]  mb-[6px]  text-white h-[30px] md:h-[38px] rounded-6 hover:opacity-70 "
          onClick={handleRetore}
        >
          Restore
        </button>
        <button
          className="bg-white-2 w-[95%] px-[4px] md:w-[80%]  text-black-2 h-[30px] md:h-[38px] rounded-6  hover:opacity-70 shadow-inner"
          onClick={() => {
            setIsHidden(false);
            setIsId(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default FileTrash;
