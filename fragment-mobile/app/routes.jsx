import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Mobile from "./Mobile";
import AllSubscriptions from "./AllSubscriptions";

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <Route path="/mobile" component={AllSubscriptions} />
        <Route path="/mobile/:subscriptionId" component={Mobile} />
        <Route path="*" component={null} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
