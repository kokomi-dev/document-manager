import React, { Fragment, useEffect } from "react";
import Flex from "../../Components/Flex/Flex";
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
        <h4>Filter</h4>
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
