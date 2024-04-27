import React from "react";
import { useSelector } from "react-redux";
import Button from "../../component/Components/Button/Button";
const SettingProfile = () => {
  const { userName, photoURL } = useSelector((state) => state.login);
  return (
    <div className="w-full min-w-[100%] py-6">
      <div className="min-w-full ">
        <div className="flex-1  w-full h-full">
          <h1 className="text-[2rem] font-semibold border-b-[0.5px] border-[#888]">
            Setting
          </h1>
        </div>
        {/*  */}
        <div className="w-full flex flex-col items-start justify-start mt-24">
          <div className="flex items-center justify-center">
            <img
              src={photoURL}
              className="size-[60px] rounded-[180px]"
              alt="img_profile"
            />
            <h3 className="ml-24 text-[1.3rem] font-semibold">{userName}</h3>
          </div>
          {/* change input */}
          <div className="w-[100%] mt-24">
            <form className="w-[100%] my-24 h-[48px]">
              <label className="block my-[2px] text-[1rem] cursor-pointer">
                Change name:
              </label>
              <input className="outline-none w-[40%] h-[80%] rounded-6" />
            </form>
            <form className="my-24 h-[48px]">
              <label className="block my-[2px] text-[1rem] cursor-pointer">
                Change images:
              </label>
              <input className="outline-none w-[40%] h-[80%] rounded-6" />
            </form>{" "}
            <form className="my-24 h-[48px]">
              <label className="block my-[2px] text-[1rem] cursor-pointer">
                Change password:
              </label>
              <input className="outline-none w-[40%] h-[80%] rounded-6" />
            </form>{" "}
            <form className="my-24 h-[48px]">
              <label className="block my-[2px] text-[1rem] cursor-pointer">
                Password confirm:
              </label>
              <input className="outline-none w-[40%] h-[80%] rounded-6" />
            </form>
          </div>
          {/* button */}
          <div className="flex items-center justify-center mt-24">
            <Button className="bg-white text-black mr-12" justify="center">
              Cancel
            </Button>
            <Button className="button__blue text-white " justify="center">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
