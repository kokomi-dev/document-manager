import { useSelector } from "react-redux";
import Aside from "./Aside/Aside";
import Loading from "../component/Components/Loading/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../api/Firebase/Firebase";
import ModalConfirmLogout from "../component/AuthComponent/ModalConfirmLogout/ModalConfirmLogout";
const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state.login);
  const [modalLogout, setModalLogout] = useState(true);
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
  return (
    <div className="w-full">
      {loginUser.isLoading ? <Loading /> : null}
      <main className="main  w-full h-full flex items-center justify-center">
        {loginUser.isLogin ? (
          <div className="w-[100%] h-[100%] flex  items-start justify-start">
            <aside className="w-[20%] h-[100vh] sticky top-0 overflow-auto bg-aside ">
              <Aside isHidden={modalLogout} setIsHidden={setModalLogout} />
            </aside>
            {/* dashboard, favorites, trash pages */}
            <div className="w-full min-h-[100vh] scroll-smooth flex-1 px-6 py-0 bg-main">
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
