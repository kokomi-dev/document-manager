import React, { Fragment, useEffect } from "react";
import Flex from "../../Components/Flex/Flex";
import Button from "../../Components/Button/Button";
import { FiGrid } from "react-icons/fi";
import { FiTable } from "react-icons/fi";
import Search from "../../Components/Search/Search";
import "./submain.scss";
import { useSelector } from "react-redux";
const SubMainFeed = ({ setLayouts, setCreationTime }) => {
  const loginUser = useSelector((state) => state.login);
  useEffect(() => {
    const chosseLayout = document.querySelectorAll(".choose__layout");
    const layout = localStorage.getItem("layout");
    chosseLayout.forEach((it) => {
      if (it.classList.contains(layout)) {
        it.classList.add("active");
      }
    });
    chosseLayout.forEach((item) => {
      item.addEventListener("click", () => {
        chosseLayout.forEach((it) => {
          it.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }, []);
  return (
    <Fragment>
      {/* search */}
      <Search loginUser={loginUser} />
      <Flex justify="between" className="mt-[28px]">
        {/* chosse layout */}
        <Flex justify="center" className=" rounded-6 p-1">
          <Button
            justify="center"
            className="choose__layout grid_layout mr-8 "
            onClick={() => {
              setLayouts("grid_layout");
              localStorage.setItem("layout", "grid_layout");
            }}
          >
            <FiGrid className="mr-8" />
            Grid
          </Button>
          <Button
            justify="center"
            className="choose__layout table_layout"
            onClick={() => {
              setLayouts("table_layout");
              localStorage.setItem("layout", "table_layout");
            }}
          >
            <FiTable className="mr-8" />
            Table
          </Button>
        </Flex>
        {/* fillter Documentss */}
        <Flex justify="center">
          <h3 className="text-white3">Creation time:</h3>
          <select
            onChange={(e) => {
              setCreationTime(e.target.value);
            }}
            className="border-[1px] border-white3 min-w-[100px] outline-none rounded-6 px-4 ml-8 h-[38px]"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="all">All</option>
          </select>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default SubMainFeed;
