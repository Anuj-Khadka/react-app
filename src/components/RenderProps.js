import React, { Component } from "react";

class DemoRenderProps extends Component {
  render() {
    return <h1>{this.props.render(false)}</h1>;
  }
}

class CounterRenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.countIncrement)}</div>
    );
  }
}

class ClickCounterRenderProps extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <button onClick={countIncrement}>
          {this.props.yourName} Clicked {count} times
        </button>
      </div>
    );
  }
}

class HoverCounterRenderProps extends Component {
  render() {
    const { count, countIncrement } = this.props;
    return (
      <div>
        <h2 onMouseOver={countIncrement}>hovered {count} times</h2>
      </div>
    );
  }
}

export default DemoRenderProps;
export { CounterRenderProps, ClickCounterRenderProps, HoverCounterRenderProps };
