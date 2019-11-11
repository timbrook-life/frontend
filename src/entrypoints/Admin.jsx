import "css/admin.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "components/admin/Sidebar";
import Main from "components/admin/Main";
import NotFound from "entrypoints/404";
import Podcast from "../components/admin/Podcast";
import Amazon from "../components/admin/Amazon";
import Plants from "../components/plants/Plants";

const Admin = ({ match }) => {
  return (
    <div className="admin-layout">
      <Sidebar className="admin-sidebar" />
      <div className="admin-main">
        <Switch>
          <Route exact path={`${match.path}/`} component={Main} />
          <Route exact path={`${match.path}/pod/:podId`} component={Podcast} />
          <Route exact path={`${match.path}/amazon/`} component={Amazon} />
          <Route exact path={`${match.path}/plants/`} component={Plants} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
