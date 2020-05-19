import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Sales from "./Sales";

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/sales" component={Sales} />
        <Route path="*" component={null} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
