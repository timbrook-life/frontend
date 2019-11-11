import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getConfiguredApps, addAppToHome } from "actions/admin";

const style = url => {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    height: "100%",
    borderRadius: "5px"
  };
};

const Main = props => {
  useEffect(props.load, []);
  const items = props.apps.map((app, i) => {
    return (
      <div className="admin-block" key={i}>
        <Link to={app.link} en>
          <div style={style(app.cover)}>{app.cover ? undefined : app.name}</div>
        </Link>
      </div>
    );
  });
  return <div className="admin-content">{items}</div>;
};
const mapStateToProps = (state, ownProps) => {
  return {
    apps: state.appSettings.apps || []
  };
};

const mapDispatchToProps = {
  load: getConfiguredApps,
  add: addAppToHome
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
