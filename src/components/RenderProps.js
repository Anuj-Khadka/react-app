import React, { Component } from "react";

class DemoRenderProps extends Component {
  render() {
    return <h1>{this.props.render(false)}</h1>;
  }
}

export default DemoRenderProps;
