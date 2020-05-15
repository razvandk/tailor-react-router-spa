import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Mobile from "./Mobile";

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/mobile" component={Mobile} />
        <Route path="*" component={null} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
