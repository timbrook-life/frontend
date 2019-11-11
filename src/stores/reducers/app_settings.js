import plantLogo from "images/plant.svg";
import podCover from "images/podcover.png";

const APP_COVER_MAP = {
  podcasts: podCover,
  plants: plantLogo
};

const APP_LOCATION = {
  plants: "/admin/plants/"
};

export default function app_settings(state = {}, action) {
  switch (action.type) {
    case "RESOLVE_CONFIGURED_APP":
      return {
        ...state,
        apps: action.body.map(({ app, config }) => {
          return {
            name: app,
            cover: APP_COVER_MAP[app],
            link: APP_LOCATION[app] || config.app_link || "/admin"
          };
        })
      };
  }
  return state;
}
