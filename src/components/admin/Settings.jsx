import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { getConfiguredApps } from "actions/admin";

const Settings = ({ open, close, apps, loadSettings }) => {
  if (!open) {
    return <div />;
  }

  useEffect(() => {
    loadSettings();
  }, []);

  const settingsContainer = useRef();

  function handleClick(e) {
    if (!settingsContainer.current.contains(e.target)) {
      close();
    }
  }

  return (
    <div className="app-settings" onClick={handleClick}>
      <div ref={settingsContainer} className="settings-content">
        <h1>User Settings</h1>
        <h3>Configured Apps</h3>
        <ul>
          {apps.map(a => {
            return (
              <li key={a.name}>
                {a.name}: {JSON.stringify(a)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.appSettings.settingsPageOpen,
    apps: state.appSettings.apps || []
  };
};

const mapDispatchToProps = {
  close() {
    return dispatch => dispatch({ type: "CLOSE_SETTINGS" });
  },
  loadSettings: getConfiguredApps
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
