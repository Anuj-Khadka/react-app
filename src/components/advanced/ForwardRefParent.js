import React, { Component } from "react";

export class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        ForwardRefParent
        <ForwardRef ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" name="focuser" id="focuser" ref={ref} />
    </div>
  );
});

export default ForwardRefParent;
