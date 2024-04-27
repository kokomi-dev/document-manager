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
      className="w-[40%] h-[70%] transition-all fixed top-[30%] left-[50%] translate-x-[-50%] translate-y-[-20%] z-[10]"
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
