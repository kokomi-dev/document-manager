import React, { useEffect, useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
const ModalLogin = ({ isHidden }) => {
  const [modal, setModal] = useState(true);
  useEffect(() => {
    setModal(true);
  }, [isHidden]);
  return (
    <div
      className="w-[80vw] h-[50%] lg:w-[40%] lg:h-[70%] mx-[12px] lg:mx-[0] transition-all duration-300 fixed top-[30%] left-[10%] lg:left-[50%] translate-x-[0%] lg:translate-x-[-50%] translate-y-[-20%] z-[40]"
      hidden={isHidden}
    >
      {modal ? (
        <LoginForm setModal={setModal} />
      ) : (
        <RegisterForm setModal={setModal} />
      )}
    </div>
  );
};

export default ModalLogin;
