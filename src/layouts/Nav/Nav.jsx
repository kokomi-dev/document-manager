import React, { useEffect } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
// icon
import { FaFileAlt } from "react-icons/fa";

import { MdSpaceDashboard } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

function Nav() {
  useEffect(() => {
    const listNav = document.querySelectorAll(".nav__item");
    listNav.forEach((item) => {
      item.addEventListener("click", () => {
        listNav.forEach((it) => {
          if (it.classList.contains("active")) {
            it.classList.remove("active");
          }
        });
        item.classList.add("active");
      });
    });
  }, []);
  return (
    <div className="w-[100%]  py-6 flex items-center justify-start flex-col  text-[1.06rem]  border-[#888] border-b-[0.5px] ">
      <Link
        to="/dashboard"
        className="nav__item rounded-6  active flex items-center px-6 justify-start my-[4px] text-white2 mt-0"
      >
        <MdSpaceDashboard className="mr-8 text-[1.3rem]" />
        <span className="item__name">Dashboard</span>
      </Link>
      <Link
        className="nav__item rounded-6  flex items-center px-6 justify-start my-[4px] text-white2 "
        to="/documents"
      >
        <FaFileAlt className="mr-8 text-[1.2rem]" />
        Documents
      </Link>
      <Link
        to="/documents/trash"
        className="nav__item rounded-6  flex items-center px-6 justify-start my-[4px] text-white2 "
      >
        <FaTrashAlt className="mr-8 text-[1.1rem]" />
        Trash
      </Link>
    </div>
  );
}

export default Nav;
