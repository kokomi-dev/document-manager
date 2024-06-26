import React, { useEffect, useState } from "react";
import { FaHandPeace } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { getData } from "../../../api/Data/GetData";
import "./search.scss";
import { Link } from "react-router-dom";

const Search = ({ loginUser }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resultList, setResultList] = useState([]);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(loginUser);
      const res = await data.data;
      if (res) {
        const filteredItems = res.filter(
          (item) =>
            !item.isDelete &&
            item.fileName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setResultList(filteredItems);
      }
    };

    fetchData();
  }, [searchValue, loginUser]);

  const handleFocus = () => {
    setFocus(true);
    setResultList([]);
    setSearchValue("");
  };

  const handleBlur = () => {
    setTimeout(() => {
      setResultList([]);
      setFocus(false);
      setSearchValue("");
    }, 200);
    return () => {};
  };

  return (
    <div
      className={`w-full h-[140px] ${
        focus ? "h-[280px]" : ""
      } my-24 py-24 text-start  flex-1 px-12 flex-col flex items-start justify-start bg-white  rounded-6  transition-all duration-300`}
    >
      {/* user name logined */}
      <div className="w-full flex flex-col lg:flex-row xl:flex-row items-center justify-center">
        <h6 className="text-black-2 flex items-center justify-start mt-6">
          <div className="flex lg:block">
            <FaHandPeace className="text-blue text-[1.1rem] mr-[4px]" />
            <span className="italic block md:inline-block">Hi!</span>
          </div>
          <span className="ml-8 text-black ">{loginUser.userName}</span>
        </h6>
        {/* search */}
        <form className="h-[38px] w-[100%] lg:min-w-[60%] form__search my-8 lg:ml-24 flex items-center  justify-center  text-black p-[2px] rounded-6">
          <IoSearch className="ml-[2px] text-[1.1rem]" />
          <input
            value={searchValue}
            placeholder="Search"
            className="search outline-none w-[80%] md:w-[70%] lg:w-[50%] h-full px-[4px] bg-white-2"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </form>
      </div>
      {focus && (
        <div className="w-[100%] mt-12 overflow-y-scroll transition-all duration-200 ">
          <hr className="w-[100%] opacity-50 my-4" />
          <h1 className="text-blue font-semibold">Result:</h1>
          {/* show result search */}
          <div className="w-[100%] h-[100%] ">
            {resultList.map((item) => (
              <Link
                className="my-[2px] block capitalize py-[2px] ml-[4px] hover:underline hover:text-blue"
                key={item.id}
                to={`/documents/files/${item.id}`}
              >
                {item.fileName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
