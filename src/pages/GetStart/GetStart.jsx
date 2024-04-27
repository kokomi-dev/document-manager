import React, { useState } from "react";
import ModalLogin from "../../component/AuthComponent/ModalLogin/ModalLogin";
import OverLay from "../../component/Components/OverLay/OverLay";
// button
import Button from "../../component/Components/Button/Button";
// icon
import { FaArrowRight } from "react-icons/fa6";
const GetStart = () => {
  // state
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center py-[40px] ">
        {/* banner */}
        <div className="w-[200px] h-[200px] bg-bannner bg-cover bg-[url('https://store-images.s-microsoft.com/image/apps.51149.d7692295-d84f-4bf5-9447-3cbb6ae29517.cf84c4b2-18b1-4f45-90cd-f83235f3815a.b5a464fd-7606-4c3f-9090-a69fcdd84bf0')]"></div>
        {/* text des */}
        <div className="mt-[60px] w-[70%]">
          <h1 className="text-[2.8rem] font-bold w-[100%] text-center leading-[3.4rem]">
            The most optimized and easiest way to manage your documents easily
            easy and intuitive
          </h1>
        </div>
        <p className="text-[#777] mt-12">
          Create an account and start managing your documents in under less one
          minute minute
        </p>
        {/* button get start and learn more */}
        <div className="flex items-center justify-between mt-[60px]">
          <Button
            justify="center"
            className="button__blue text-white"
            onClick={() => {
              setIsHidden(false);
            }}
          >
            Getstart
          </Button>
          <Button
            justify="center"
            className="items-center ml-[20px] border-[.4px] border-[#888] button__green text-white"
          >
            <p className="">More</p>
            <FaArrowRight className="ml-8" />
          </Button>
        </div>
      </div>
      <ModalLogin isHidden={isHidden} />
      <OverLay
        isHidden={isHidden}
        onClick={() => {
          setIsHidden(true);
        }}
      />
    </>
  );
};

export default GetStart;
