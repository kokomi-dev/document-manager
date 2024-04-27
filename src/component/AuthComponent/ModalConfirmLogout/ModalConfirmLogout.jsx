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
      style={{
        display: isHidden ? "none" : "flex",
      }}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] rounded-6 shadow-xl translate-y-[-50%] w-[300px] h-[100px] bg-white z-[200] flex items-center justify-center flex-col`}
    >
      <h4>You definitely want to sign out!</h4>
      <div className="flex items-center justify-center mt-4">
        <Button
          justify="center"
          className="bg-main mr-8"
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
