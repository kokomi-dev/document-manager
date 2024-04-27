import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css
import GlobalStyle from "./styles/GlobalStyles";
import "./App.css";
// css react-toast
import "react-toastify/dist/ReactToastify.css";
// Provider
import { Provider } from "react-redux";
// store
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </Provider>
);
