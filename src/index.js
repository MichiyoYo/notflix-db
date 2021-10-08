import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { moviesApp } from "./reducers/reducers";

import "./index.css";

const store = createStore(moviesApp, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
