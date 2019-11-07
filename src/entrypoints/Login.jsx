import "css/not_found.scss";
import "css/login.scss";

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

export default function LoginPage(props) {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    const { state } = props.location;
    return <Redirect to={state.from.pathname || "/admin"} push />;
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
      .then(res => {
        console.log(res);
      })
      .catch(() => {
        console.log("yup no");
        setRedirect(true);
      });
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
