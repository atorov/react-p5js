import React, { Component } from "react";
import PropTypes from "prop-types";
import sketch from "./sketch.js";

class P5Wrapper extends Component {
  static propTypes = {
    p5Props: PropTypes.object.isRequired,
    getValue: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.canvas = new window.p5(sketch, "app-p5_container");
    setTimeout(() => this.canvas.pushProps({ ...this.props.p5Props, getValue: this.props.getValue }), 100);
  }

  componentWillReceiveProps(nextProps) {
    this.canvas.pushProps({ ...this.props.p5Props, getValue: this.props.getValue });
  }

  render() {
    return <div id="app-p5_container" style={{ width: "fit-content", margin: "auto" }} />;
  }
}

export default P5Wrapper;
