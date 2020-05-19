import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="*" component={null} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
