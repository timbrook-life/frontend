import "css/main.scss";

import React from "react";
import ReactDOM from "react-dom";

import asyncComponent from "util/asyncComponent";
import AdminRoute from "util/protectedRoute";
import Home from "entrypoints/Home";
import NotFound from "entrypoints/404";
import { store, persistor } from "stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const root = document.getElementById("root");

const AsyncAdmin = asyncComponent(() => {
  return import("entrypoints/Admin");
});

const AsyncLogin = asyncComponent(() => {
  return import("entrypoints/Login");
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Home />} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <AdminRoute path="/admin" component={AsyncAdmin} />
          <Route path="/login" component={AsyncLogin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  root
);
