import React, { Component } from "react";

class UpdateLifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "noname",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this is getDerivedStateFromProps in Update (child)");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is shouldComponentUpdate in Update (child)");
    return true;
  }

  clickHandler = () => {
    this.setState({
      name: "yesname",
    });
  };

  render() {
    console.log("this is render in Update (child)");
    return (
      <React.Fragment>
        {/* React.Fragment is the same as <></> but the difference is that we can use "key" attribute in raw form only. */}
        <div>UpdateLifecycle hehe</div>
      </React.Fragment>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this is getSnapshotBeforeUpdate in Update (child)");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("this is componentDidUpdate in Update (child)");
  }
}


export default UpdateLifecycle;