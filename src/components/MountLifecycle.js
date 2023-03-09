import React, { Component } from "react";

class MountLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mounting lifecycle methods",
    };
    console.log("this is coming from Constructor method (child)");
  }

  static getDerivedStateFromProps(state, props) {
    console.log(
      "this is coming from static getDeriedStateFromProp method (child)"
    );
    return null;
  }

  componentDidMount() {
    console.log("this is coming from componentDidMount method (child)");
  }

  render() {
    console.log("this is coming from render method (child)");
    return <div>MountLifecycle</div>;
  }
}

export default MountLifecycle;
