import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// TODO: move
function logout() {
  fetch("/api/auth/logout", {
    method: "POST"
  }).then(res => {
    // Quick and dirty
    localStorage.clear();
    location.reload();
  });
}

const Sidebar = ({ className, openSettings }) => {
  return (
    <div className={className}>
      <h1>
        <Link to="/admin">Timbrook.tech</Link>
      </h1>
      <footer>
        <button className={"logout"} onClick={logout}>
          Logout
        </button>
        <button onClick={openSettings}>Settings</button>
      </footer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  openSettings() {
    return dispatch => {
      dispatch({
        type: "OPEN_SETTINGS"
      });
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
