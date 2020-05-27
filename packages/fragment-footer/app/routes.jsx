import React from "react";
import { Router, Route, browserHistory } from "react-router";
import Footer from "./Footer";
import Footer2 from "./Footer2";

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/mobile/*" component={Footer2} />
    <Route path="*" component={Footer} />
  </Router>
);

export default Routes;
