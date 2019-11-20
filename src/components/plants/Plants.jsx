import "css/plants.scss";

import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import Chart from "d3-bar";

const gen = n => {
  const series = [];
  for (var i = 0, variance = 0, value; i < n; i++) {
    variance += Math.random() - 0.5;
    const value = Math.abs(Math.cos(i / 10) + variance);
    series.push({
      bin: new Date(Date.now() - i * 3600000 * 24),
      value
    });
  }
  return series;
};

const Plants = props => {
  const chartRef = useRef(null);

  useEffect(() => {
    const testChart = new Chart({
      target: chartRef.current,
      width: 800,
      height: 120
    });
    testChart.render(gen(45));
  }, [chartRef.current]);

  return (
    <div className="plant-body">
      <h1>Hello Plants</h1>
      <svg ref={chartRef} className="chart"></svg>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Plants);
