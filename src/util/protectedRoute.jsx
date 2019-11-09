import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function AdminRoute(props) {
  const { component: Component, location, loggedIn, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.admin.loggedIn
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminRoute);
