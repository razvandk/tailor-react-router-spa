import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/mobile/*" component={FooterMobile} />
      <Route path="*" component={Footer} />
    </Router>
  </Provider>
);

export default Routes;
