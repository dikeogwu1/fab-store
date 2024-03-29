import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
