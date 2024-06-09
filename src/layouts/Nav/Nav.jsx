import React, { useEffect } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
// icon
import { FaFileAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
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
    <div className="w-full h-full ml-4 my-12 flex items-center justify-start flex-col  text-[1.06rem]   ">
      <div className="w-full pl-8 text-[1rem]">
        <h6 className="text-[1rem] text-black-2 mb-12">CORE</h6>
        <Link to="/dashboard" className="nav__item active">
          <MdSpaceDashboard className="mr-8 text-[1.2rem]" />
          <span className="item__name">Dashboard</span>
        </Link>
        <Link to="/documents/create" className="nav__item ">
          <IoIosCreate className="mr-8 text-[1.2rem]" />
          <span className="item__name">Create Doc</span>
        </Link>
      </div>
      <div className="w-full pl-8 text-[1rem] mt-12">
        <h6 className="text-[1rem] text-black-2 mb-12">INTERFACE</h6>
        <Link className="nav__item" to="/documents">
          <FaFileAlt className="mr-8 text-[1.1rem]" />
          <span className="item__name">Documents</span>
        </Link>
        <Link to="/documents/trash" className="nav__item">
          <FaTrashAlt className="mr-8 text-[1rem]" />
          <span className="item__name">Trash</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
