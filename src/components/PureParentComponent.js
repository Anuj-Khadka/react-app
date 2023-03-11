import React, { Component, PureComponent } from "react";

class PureParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "componental",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "componental",
      });
    }, 2000);
  }

  render() {
    console.log("*****Parent Component******");
    return (
      <div>
        PureParentComponent
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
      </div>
    );
  }
}

class PureComp extends PureComponent {
  render() {
    console.log("pure component");
    return <div>Pure Component {this.props.name}</div>;
  }
}

class RegularComp extends Component {
  render() {
    console.log("regular component");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureParentComponent;
