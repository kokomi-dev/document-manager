import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../api/Data/GetData";
import FileTrash from "../../../component/TrashComponent/FileTrash/FileTrash";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";
import OverLay from "../../Components/OverLay/OverLay";
import "./maintrash.scss";
const MainTrash = ({ setNumberTrash }) => {
  const [listDocuments, setListDocuments] = useState([]);
  const loginUser = useSelector((state) => state.login);
  const [actionTriggered, setActionTriggered] = useState(false);
  const [details, setDetail] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isId, setIsId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(loginUser);
        if (data) {
          const filteredData = data.data.filter((item) => item.isDelete);
          const filteredIds = filteredData.map((item) => item.id);
          setListDocuments(filteredData);
          setNumberTrash(filteredData.length);
          setDetail(filteredIds);
        } else {
          setListDocuments([]);
          setDetail([]);
        }
      } catch (error) {}
    };
    fetchData();
  }, [actionTriggered]);
  return (
    <div className="w-[100%] h-[100%] ">
      {listDocuments.length === 0 && (
        <span className="block text-center text-[1.2rem] font-semibold mt-24">
          Your trash is empty!
        </span>
      )}
      {listDocuments.length > 0 && (
        <table className="w-[100%] h-[100%] main__table">
          <thead>
            <tr className="w-[100%]">
              <th>STT</th>
              <th>File Name</th>
              <th>Content</th>
              <th>Create At</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {listDocuments
              .filter((item) => {
                if (item.isDelete === true) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <FileTrash
                    key={index}
                    index={index}
                    data={item}
                    detail={details[index]}
                    setIsId={setIsId}
                    setIsHidden={setIsHidden}
                    onAction={() => {
                      setActionTriggered(true);
                    }}
                  />
                );
              })}
          </tbody>
        </table>
      )}
      <ModalConfirmDelete
        id={isId}
        loginUser={loginUser}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        // onAction={onAction}
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

export default MainTrash;
