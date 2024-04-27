import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { createAccountEmailPassword } from "../Auth/Auth";
const Form = ({ label, input, type, value, handleChange }, props) => {
  return (
    <div className="w-[100%] mb-4">
      <label htmlFor={label} className="text-black-2 text-[0.9rem]">
        {label}
      </label>
      <br />
      <input
        id={label}
        type={type}
        placeholder={input}
        className="w-[100%] px-[6px] py-[3px] border-[0.5px] rounded-6 border-[#888] outline-none"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
const RegisterForm = ({ setModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  useEffect(() => {
    setError(false);
    setErrorPass(false);
  }, [name, email, password, confirmPassword]);
  const handleSubmitCreateUser = (e) => {
    e.preventDefault();
    if (!name && !email && !password && !confirmPassword) {
      setError(true);
      return;
    }
    if (password !== confirmPassword) {
      setErrorPass(true);
      return;
    }
    createAccountEmailPassword(email, password);
    console.log("email", email);
  };
  return (
    <div className="relative transition-all min-w-[455px] min-h-[450px] bg-white text-black  rounded-[6px] p-[24px]">
      {/* head */}
      <span className="text-[1.2rem] font-bold text-[#111]">Sign Up</span>
      <span className="text-[0.9rem] text-white3 ml-8">to continue!</span>
      {/*    form register account*/}
      <form
        className="f w-[100%] h-[100%] my-24 "
        onSubmit={handleSubmitCreateUser}
      >
        <Form
          label="Full Name"
          value={name}
          handleChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form
          label="Email"
          value={email}
          type="email"
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form
          label="Password"
          type="password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Form
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          handleChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {/*    */}
        <Button
          className="button__blue text-white mt-24 min-w-full"
          justify="center"
        >
          Sign Up
        </Button>
        {error && (
          <span className="text-red text-[0.85rem] underline italic font-extralight text-center block mt-4">
            Fill full the information
          </span>
        )}
        {errorPass && (
          <span className="text-red text-[0.85rem] underline italic font-extralight text-center block mt-4">
            Passwords do not match
          </span>
        )}
        <div className="mt-12 text-left">
          <span className="text-black-2 text-[0.9rem]">
            You have account !{" "}
          </span>
          <span
            className="cursor-pointer text-blue"
            onClick={() => {
              setModal(true);
            }}
          >
            Sign In
          </span>
        </div>
      </form>
      {/* banner */}
      <div className="w-[120px] h-[30px] bg-blue rotate-[270deg] text-white-2 absolute top-[65px] left-[-75px] rounded-tl-[6px]  rounded-tr-[6px] flex items-center justify-center">
        <span className="text-[0.8rem]">Firebase</span>
      </div>
    </div>
  );
};
export default RegisterForm;
