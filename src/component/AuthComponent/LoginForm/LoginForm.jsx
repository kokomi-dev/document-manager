import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import iconGoogle from "../../../assets/images/iconGoogle.png";
import { signInWithEmailAndPassword, signInWithGoogle } from "../Auth/Auth";

const LoginForm = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setModal(true);
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };
  const handleSignInGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch {
      console.log("Login with google error");
    }
  };
  return (
    <div className="relative transition-all lg:min-w-[450px] lg:min-h-[450px] bg-white text-black p-[24px] rounded-[6px]">
      {/* head */}
      <span className="text-[1.2rem] font-bold text-[#111]">Sign In</span>
      <span className="text-[0.9rem] text-white3 ml-8">to continue!</span>
      {/* body */}
      <div className="mt-[40px] w-full">
        {/* sign in with google */}
        <Button
          className="border-[1px] border-[#888] w-[100%]"
          onClick={handleSignInGoogle}
        >
          <img
            alt="iconGoogle"
            src={iconGoogle}
            className="w-[20px] h[20px] mr-12"
          />
          Login with Google
        </Button>

        {/* or */}
        <div className=" my-[24px] relative flex items-center justify-between">
          <div className="w-[40%] h-[1px] bg-[#888]  "></div>
          <div className="top-[-13px] text-white3 ">hoặc</div>
          <div className="w-[40%] h-[1px] bg-[#888] "></div>
        </div>
        {/* sign with email and password  */}
        <form>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
            className="w-[100%] h-[38px] border-[1px] border-[#888] px-4 rounded-[6px] outline-none"
          ></input>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="w-[100%] h-[38px] mt-12 border-[1px] border-[#888] px-4 rounded-[6px] outline-none"
          ></input>
          <Button
            justify="center"
            className="w-[100%] border-[1px] border-[#888] mt-[24px] button__green text-white "
            onClick={handleSignIn}
          >
            <h4>Login</h4>
          </Button>
        </form>

        {/* sign up account */}
        <div className="mt-[24px]">
          <span className="text-white3 text-[0.8rem]">
            You haven't account?
          </span>
          <span
            className="text-blue ml-8 text-[0.9rem] underline cursor-pointer"
            onClick={() => {
              setModal(false);
            }}
          >
            Sign Up
          </span>
        </div>
      </div>
      {/* check banner */}
      <div className="w-[120px] h-[30px] bg-blue rotate-[270deg] text-white-2 absolute top-[65px] left-[-75px] rounded-tl-[6px]  rounded-tr-[6px] flex items-center justify-center">
        <span className="text-[0.8rem]">Firebase</span>
      </div>
    </div>
  );
};
export default LoginForm;
