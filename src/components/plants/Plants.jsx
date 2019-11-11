import "css/plants.scss";

import React from "react";
import { connect } from "react-redux";

const Plants = props => {
  return (
    <div className="plant-body">
      <h1>Hello Plants</h1>
      <p>I have no information for you yet</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plants);
