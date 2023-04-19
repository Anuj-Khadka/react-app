import React, { Component } from "react";
import MountLifecycle from "./MountLifecycle";

class MountLifecycleParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mounting lifecycle methods",
    };
    console.log("this is coming from Constructor method (parent)");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("this is coming from static getDeriedStateFromProp method (parent)");
    return null;
  }

  render() {
    console.log("this is coming from render method (parent)");
    return <MountLifecycle />;
  }

  componentDidMount() {
    console.log("this is coming from componentDidMount method (parent)");
  }
}

export default MountLifecycleParent;
