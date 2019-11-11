import fetchActionCreator from "fetch-action-creator";

export function getConfiguredApps() {
  return (dispatch, getState) => {
    const token = getState().admin.token;
    dispatch(
      fetchActionCreator(
        "CONFIGURED_APP",
        "/api/p/admin_apps_enabled?select=app,config",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    );
  };
}

export function addAppToHome(appname) {
  return (dispatch, getState) => {
    const { token, email } = getState().admin;
    dispatch(
      fetchActionCreator("ADD_APP", "/api/p/admin_apps_enabled", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          email,
          app: appname
        })
      })
    );
  };
}
