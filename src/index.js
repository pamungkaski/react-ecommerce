import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";

import { Provider } from "react-redux";
import store from "./store/configureStore";

import routes from "./routes";

import "./styles/global.sass";
import "./favicon.ico";

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
