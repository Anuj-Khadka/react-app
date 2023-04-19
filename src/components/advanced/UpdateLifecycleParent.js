import React, { Component } from "react";
import UpdateLifecycle from "./UpdateLifecycle";

class UpdateLifecycleParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "noname",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this is getDerivedStateFromProps in Update (parent)");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is shouldComponentUpdate in Update (parent)");
    return true;
  }

  clickHandler = () => {
    this.setState({
      name: "yesname",
    });
  };

  render() {
    console.log("this is render in Update (parent)");
    return (
      <>
        <div>UpdateLifecycleParent hehe</div>
        <button onClick={this.clickHandler}>Click Me!</button>
        <UpdateLifecycle />
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this is getSnapshotBeforeUpdate in Update (parent)");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("this is componentDidUpdate in Update (parent)");
  }
}


export default UpdateLifecycleParent;