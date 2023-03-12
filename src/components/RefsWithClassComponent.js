import React, { Component } from "react";

class RefsWithClassComponentParent extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  clickHandler = () => {
    console.log(this.parentRef)
    this.parentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <RefsWithClassComponent ref={this.parentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}



class RefsWithClassComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        RefsWithClassComponent
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefsWithClassComponentParent;
