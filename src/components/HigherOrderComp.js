import React, { Component } from "react";

// const higherOrderComp = WrappedComponent => {class HigherOrderComp extends Component{}}
const UpdatedCounter = (OriginalCounterComponent) => {
  class NewComponent extends Component {
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
        <OriginalCounterComponent
          count={this.state.count}
          counter={this.countIncrement}
        //   use spread operator to pass the props that is passed by the parent component in render area
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

class ClickCounter extends Component {
  render() {
    const { count, counter } = this.props;
    return (
      <div>
        <button onClick={counter}>{this.props.yourName} Clicked {count} times</button>
      </div>
    );
  }
}

class HoverCounter extends Component {
  render() {
    const { count, counter } = this.props;
    return (
      <div>
        <h2 onMouseOver={counter}>hovered {count} times</h2>
      </div>
    );
  }
}

const NewHoverCounter = UpdatedCounter(HoverCounter);

export default UpdatedCounter(ClickCounter);
export { NewHoverCounter };
