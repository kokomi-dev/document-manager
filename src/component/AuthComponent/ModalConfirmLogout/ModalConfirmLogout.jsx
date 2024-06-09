import React from "react";
import firebase from "../../../api/Firebase/Firebase";
import Button from "../../Components/Button/Button";
const ModalConfirmLogout = ({ isHidden, setIsHidden }) => {
  const handlelogout = async () => {
    await firebase.auth().signOut();
    console.log("logout success");
  };
  return (
    <div
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] ${
        isHidden
          ? "translate-y-[-150%] opacity-0 invisible"
          : "translate-y-[-50%] opacity-100 visible"
      } rounded-6 shadow-xl  w-[300px] h-[100px] bg-white z-[400] flex items-center justify-center flex-col transition-all duration-300`}
    >
      <h4 className="text-[1.1rem] lg:text-[1.3rem]">
        You definitely want to sign out!
      </h4>
      <div className="flex items-center justify-center mt-8">
        <Button
          justify="center"
          className="bg-[#FF6048] text-white mr-12"
          onClick={() => {
            setIsHidden(true);
          }}
        >
          Cancel
        </Button>
        <Button
          justify="center"
          className="bg-blue text-white"
          onClick={handlelogout}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default ModalConfirmLogout;
