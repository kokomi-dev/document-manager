import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Aside from "./Aside/Aside";
import Loading from "../component/Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import firebase from "../api/Firebase/Firebase";
import ModalConfirmLogout from "../component/AuthComponent/ModalConfirmLogout/ModalConfirmLogout";
import { HiMiniQueueList } from "react-icons/hi2";
import { IoMdArrowRoundBack } from "react-icons/io";

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.login);
  const [modalLogout, setModalLogout] = useState(true);
  const [isSidebar, setIsSidebar] = useState(false);
  useEffect(() => {
    // handle event change uer login or logout
    const loadDataUser = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const user = await firebase.auth().currentUser;
          const data = await user._delegate;
          await user.updateProfile({
            displayName: data.displayName,
            photoURL: data.photoURL,
          });
          loginUser.isLogin = true;
          loginUser.isLoading = false;
          loginUser.userName = data.displayName || data.email;
          loginUser.photoURL = data.photoURL;
          loginUser.accessToken = data.accessToken;
          loginUser.uuId = data.uid;
          console.log("Login success");
          navigate("/dashboard");
          return;
        } else {
          loginUser.isLogin = false;
          loginUser.isLoading = false;
          loginUser.userName = "";
          loginUser.photoURL = "";
          loginUser.accessToken = null;
          loginUser.uuId = null;
          console.log("Uer Logout");
          navigate("/");
          return;
        }
      } catch {
        console.log("Error");
      }
    });
    return () => {
      loadDataUser();
    };
  }, []);
  useEffect(() => {
    setIsSidebar(false);
  }, [navigate]);
  return (
    <div className="w-full">
      {loginUser.isLoading ? <Loading /> : null}
      <main className="main  w-full h-full ">
        {loginUser.isLogin ? (
          <div className="w-[100%] h-[100%] grid-cols-1 grid-rows-1 grid md:grid-cols-[20%,80%]">
            <aside className="w-full h-[auto] md:w-auto md:min-h-[100vh]  bg-aside  top-0 ">
              <div
                className="sm:flex items-center relative justify-start md:hidden cursor-pointer transition-all duration-300"
                onClick={() => {
                  setIsSidebar(!isSidebar);
                }}
              >
                <HiMiniQueueList className="w-10 h-20 ml-24  text-white" />
                <span className="text-white text-[1.4rem] ml-12">Menu</span>
                {isSidebar && (
                  <IoMdArrowRoundBack className="text-black-2 text-[1.8rem] absolute top-[20%] rounded-6 cursor-pointer right-[10%] bg-white-2 w-[40px] h-[40px]" />
                )}
              </div>
              <div
                className={`w-full md:w-[20%] h-full fixed  top-[13%] left-[-100%] md:left-0 md:top-0 md:flex transition-all  bg-aside duration-300 ${
                  isSidebar && "left-0 z-[300] opacity-100 "
                }`}
              >
                <Aside isHidden={modalLogout} setIsHidden={setModalLogout} />
              </div>
            </aside>
            {/* dashboard, favorites, trash pages */}
            <div className="w-full min-h-[100vh]  h-full md:flex md:flex-col scroll-smooth flex-1 px-6 py-0 bg-main overflow-auto">
              {children}
            </div>
            <ModalConfirmLogout
              isHidden={modalLogout}
              setIsHidden={setModalLogout}
            />
          </div>
        ) : (
          <div className="w-[100%] min-h-[100vh] flex items-center justify-center bg-main">
            {children}
          </div>
        )}
      </main>
    </div>
  );
};
export { DefaultLayout };
