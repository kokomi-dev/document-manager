const init = {
  isLogin: false,
  isLoading: true,
  userName: "",
  accessToken: null,
  refreshToken: null,
  uuId: null,
  photoURL: "",
  metaData: {},
};
const loginReduceres = (state = init, action) => {
  switch (action.type) {
    case "ISLOGIN": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReduceres;
