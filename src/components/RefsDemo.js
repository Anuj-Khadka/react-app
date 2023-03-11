import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // latest approach
    this.inputRefs = React.createRef();
    this.cbRefs = null;
    this.setcbRefs = (element) => {
      this.cbRefs = element;
    };
  }

  componentDidMount() {
    console.log(this.inputRefs);
    this.inputRefs.current.focus();
    if (this.cbRefs) {
      this.cbRefs.focus();
    }
  }

  clickHandler = () => {
    console.log(this.inputRefs.current.value);
  };
  render() {
    return (
      <div>
        RefsDemo
        <br />
        without cb:
        <input type="text" ref={this.inputRefs} />
        <button type="submit" onClick={this.clickHandler}>
          Click
        </button>
        <br />
        {/* with cb:<input type="text" ref={this.setcbRefs} /> */}
      </div>
    );
  }
}

export default RefsDemo;
