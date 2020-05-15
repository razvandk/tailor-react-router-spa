import React from "react";
import { Router, Route, browserHistory } from "react-router";
import Footer from "./Footer";

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="*" component={Footer} />
  </Router>
);

export default Routes;
