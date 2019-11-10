import "css/not_found.scss";
import "css/login.scss";

import * as jwtdecode from "jwt-decode";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import store from "stores/store";

function LoginPage(props) {
  console.log(props);
  if (props.loggedIn) {
    return <Redirect to={"/admin"} />;
  }
  const validateLogin = ({ tokenId }) => {
    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenId
      })
    })
      .then(res => res.json())
      .then(props.login);
  };
  return (
    <div className="login-form">
      <div className="login-title">You Probably can't login</div>
      <div className="login-box">
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="But that's fine, you can try anyway"
          onSuccess={validateLogin}
          onFailure={validateLogin}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.admin.loggedIn
  };
};

const mapDispatchToProps = {
  login(payload) {
    return dispatch => {
      const key_info = jwtdecode(payload.token);
      dispatch({
        type: "LOGIN",
        payload: {
          ...payload,
          ...key_info,
          // Expiration is checking in ms
          iat: key_info.exp * 1000,
          exp: key_info.exp * 1000
        }
      });
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
