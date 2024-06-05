import React, { useState } from "react";
import ModalLogin from "../../component/AuthComponent/ModalLogin/ModalLogin";
import OverLay from "../../component/Components/OverLay/OverLay";
import Button from "../../component/Components/Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import "./GetStart.scss"; // Import the CSS file

const GetStart = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isMoreActive, setIsMoreActive] = useState(false);

  const handleMoreInfo = () => {
    setIsMoreActive(!isMoreActive);
  };

  return (
    <div className="relative w-full h-full overflow-y-hidden">
      <div
        className={`w-full  flex flex-col items-center justify-center py-[40px] transition-slide bg-main ${
          isMoreActive
            ? "hidden-slide"
            : "visible-slide max-h-[100vh] fixed top-0 right-0 left-0 bottom-0 overflow-y-hidden"
        }`}
      >
        {/* banner */}
        <div className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] bg-cover bg-[url('https://store-images.s-microsoft.com/image/apps.51149.d7692295-d84f-4bf5-9447-3cbb6ae29517.cf84c4b2-18b1-4f45-90cd-f83235f3815a.b5a464fd-7606-4c3f-9090-a69fcdd84bf0')]"></div>
        {/* text description */}
        <div className="mt-[60px] md:w-[90%] lg:w-[70%]">
          <h1 className="text-[2.1rem] lg:text-[2.8rem] font-bold w-[100%] text-center leading-[3rem] md:leading-[3.4rem]">
            The most optimized and easiest way to manage your documents easily
            and intuitively
          </h1>
        </div>
        <p className="text-[#777] w-[100%] mt-12 text-center md:text-start">
          Create an account and start managing your documents in under one
          minute.
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
            Get Start
          </Button>
          <Button
            onClick={handleMoreInfo}
            justify="center"
            className="items-center ml-[20px] border-[.4px] border-[#888] button__green text-white"
          >
            <p>More</p>
            <FaArrowRight className="ml-8" />
          </Button>
        </div>
      </div>
      {/* read more information */}
      <div
        className={`w-full h-full flex flex-col items-center justify-center py-[40px]  transition-slide ${
          isMoreActive
            ? "visible-slide px-4 md:px-8 "
            : "hidden-slide translate-x-[100%]"
        }`}
      >
        {/* logo */}
        <div className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] bg-contain bg-no-repeat bg-center bg-[url('https://store-images.s-microsoft.com/image/apps.51149.d7692295-d84f-4bf5-9447-3cbb6ae29517.cf84c4b2-18b1-4f45-90cd-f83235f3815a.b5a464fd-7606-4c3f-9090-a69fcdd84bf0')]"></div>
        <h4 className="title font-bold">Documents Management</h4>
        {/* button Login */}
        <div className="flex items-center justify-between mt-[60px]">
          <Button
            justify="center"
            className="button__green ml-12 text-white"
            onClick={() => {
              setIsHidden(false);
            }}
          >
            Login to continue!
          </Button>
        </div>
        {/* show more information */}
        <div className="w-[100%] h-[100%] flex flex-col sm:px-4 xl:px-12">
          {/* intro */}
          <div className="gr">
            <h4 className="title">1. Introduction</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                Welcome to our document management website! We understand that
                your privacy is very important. Therefore, we are committed to
                protecting your personal information. In this blog, we will
                detail how we collect, use, and protect your information when
                you use our services, especially when you log in via Firebase
                (Google).
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">2. Information We Collect</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                When you register and use our document management website, we
                may collect the following types of information:
                <ul>
                  <li>
                    Personal Information: This includes your name, email
                    address, and profile picture that you provide when logging
                    in with your Google account.
                  </li>
                  <li>
                    Document Information: This includes the documents you
                    upload, edit, and manage on our website.
                  </li>
                  <li>
                    Usage Information: This includes data about how you use the
                    website, such as login times, number of visits, and actions
                    you perform on the site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">3. How We Use Information</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                We use your information for the following purposes:
                <ul>
                  <li>
                    Providing Services: To provide, maintain, and improve our
                    document management services.
                  </li>
                  <li>
                    Authentication and Security: To authenticate users and
                    protect your account from unauthorized access.
                  </li>
                  <li>
                    Communication: To send notifications, updates, and technical
                    support related to your account and our services.
                  </li>
                  <li>
                    Analysis and Improvement: To analyze how you use the service
                    to improve user experience and develop new features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">4. Information Sharing</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                We do not share your personal information with any third
                parties, except:
                <ul>
                  <li>
                    Service Providers: Third-party providers that support us by
                    offering data storage, analytics, and payment processing
                    services. These providers only have access to the necessary
                    information and must comply with our privacy policies.
                  </li>
                  <li>
                    Legal Requirements: When we believe that sharing information
                    is necessary to comply with legal obligations or protect our
                    rights.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">5. Security</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                We do not share your personal information with any third
                parties, except:
                <ul>
                  <li>
                    Encryption: Your information is encrypted during
                    transmission and storage.
                  </li>
                  <li>
                    Access Control: Only authorized personnel are allowed to
                    access your personal information.
                  </li>
                  <li>
                    Monitoring: We monitor our systems to detect and prevent
                    unauthorized access.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">6. Your Rights</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                You have the following rights regarding your personal
                information:
                <ul>
                  <li>
                    Right to Access: You have the right to access and request a
                    copy of your personal information that we store.
                  </li>
                  <li>
                    Right to Rectification: You have the right to request
                    correction of your personal information if you believe it is
                    inaccurate or incomplete.
                  </li>
                  <li>
                    Right to Deletion: You have the right to request deletion of
                    your personal information under certain circumstances.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">7. Policy Changes</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                We may update this privacy policy from time to time to reflect
                changes in legal requirements or our business operations. We
                will notify you of any changes by posting the new policy on the
                website and sending an email notification if necessary.
              </div>
            </div>
          </div>
          <div className="gr">
            <h4 className="title">8. Contact Us</h4>
            <div className="text-black-2 text-[0.9rem] ld:text-[1rem]">
              <div>
                If you have any questions or requests regarding our privacy
                policy and practices, please contact us via email:
                nguyenthean12062002@gmail.com. Thank you for trusting and using
                our services! We are committed to protecting your privacy and
                providing you with a safe and secure document management
                experience.
              </div>
            </div>
          </div>
        </div>
        {/* button back to get start */}
        <Button
          justify="center"
          className="button__blue absolute top-[4%] cursor-pointer  left-[4%] text-white"
          onClick={() => {
            setIsMoreActive(false);
          }}
        >
          <FaAngleLeft className="text-[1.4rem] cursor-pointerlg:text-[1.2rem]" />
          <span className=" hidden md:hidden lg:block xl:block">
            Back to Get Start
          </span>
        </Button>
      </div>
      {/* modal login and overlay component */}
      <ModalLogin isHidden={isHidden} />
      <OverLay
        isHidden={isHidden}
        onClick={() => {
          setIsHidden(true);
        }}
      />
    </div>
  );
};

export default GetStart;
