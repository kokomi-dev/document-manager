import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// flex
import Flex from "../../component/Components/Flex/Flex";
import { GrDocumentText } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
// modallogin
import Nav from "../Nav/Nav";
import OverLay from "../../component/Components/OverLay/OverLay";
import { Link } from "react-router-dom";
// firebase
const Aside = ({ isHidden, setIsHidden }) => {
  // loginUser
  const loginUser = useSelector((state) => state.login);
  return (
    <Fragment>
      <div className=" w-full h-[80%] md:h-[100%]  py-12  flex items-center justify-between flex-col  transition-all duration-300">
        {/* main */}
        <div className="w-[100%] h-[80%] flex items-center flex-col justify-start">
          {/* logo */}
          <Flex justify="start" className="">
            <GrDocumentText className="mr-4 text-[1.5rem] text-white" />
            <a
              href="/dashboard"
              className="font-seri font-[600] text-white  text-[1.6rem] "
            >
              D-o-M System
            </a>
          </Flex>
          {/* images and  user name account logined */}
          <Flex justify="between" className=" flex-col pt-12  w-[100%] pb-6">
            {loginUser.photoURL === "" || loginUser.photoURL === null ? (
              <Flex
                justify="center"
                className="border-[0.2px] border-[#888] rounded-[180px] w-[40px] h-[40px]"
              >
                <FaUser className="text-[1.5rem]" />
              </Flex>
            ) : (
              <img
                src={loginUser.photoURL}
                className="img-avatar w-[62px] h-[62px] border-[1px] border-[#888]"
                alt="img_avatar"
              />
            )}
            <h3 className="pt-[2px]  text-white3">{loginUser.userName}</h3>
          </Flex>
          {/* navigation */}
          <Nav />
        </div>
        {/* setting and logout */}
        <Flex justify="center" className="">
          <Link
            to="/setting"
            className="border-[0.2px] border-[#888] p-[4px] cursor-pointer  rounded-6 mr-24"
          >
            <IoMdSettings className="text-[1.5rem] md:text-[1.3rem] lg:text-[1.3rem] text-white " />
          </Link>
          <div
            className="border-[0.2px] border-[#888] p-[4px] cursor-pointer  rounded-6 "
            onClick={() => {
              setIsHidden(false);
            }}
          >
            <FaSignOutAlt className="text-[1.5rem] md:text-[1.3rem] lg:text-[1.3rem] text-white " />
          </div>
        </Flex>
      </div>
      {/* overlay */}
      <OverLay
        isHidden={isHidden}
        onClick={() => {
          setIsHidden(true);
        }}
      />
    </Fragment>
  );
};
export default Aside;
