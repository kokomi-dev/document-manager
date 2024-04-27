import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pt-[40px] pb-[40px]">
      <div className="flex items-center justify-between w-width-primary text-[#666]">
        <h3>Contact us</h3>
        <h3>Terms of use</h3>
        <h3>Privacy terms</h3>
        <h3>
          Hotline:
          <span className="underline italic font-[400] text-[0.9rem]">
            0961563714
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
