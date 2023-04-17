import React, { Component, useState } from "react";

class States extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is state",
    };
  }
  btnClick() {
    this.setState({
      message: "You clicked the btn",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.btnClick()}>Click!</button>
      </div>
    );
  }
}

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  count() {
    // this will onl update at the log and not the actuall ui
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)

    // this will update the ui as well
    // this.setState({
    //     count : this.state.count + 1
    // }, ()=>{
    //     console.log("called back", this.state.count)
    // })

    // for countFive function, we need to use function instead of object
    this.setState(
      (previousState) => ({
        count: previousState.count + 1,
      }),
      () => {
        console.log("called back", this.state.count);
      }
    );
  }

  countFive() {
    // this wont work because it is treated as a group and the updated value is not passed from one function to another.
    this.count();
    this.count();
    this.count();
    this.count();
    this.count();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        {/* <button onClick={()=> this.count()}>Click</button> */}
        <button onClick={() => this.countFive()}>Click</button>
      </div>
    );
  }
}

function FunctionStates() {
  const [text, setText] = useState("enter your text here.");

  const onClickHandler = () => {
    console.log("clicked handler");
    setText(text.toUpperCase())
  };
  const onChangeHandler = (event) => {
    console.log("clicked handler");
    setText(event.target.value)
  };
  return (
    <div>
      <h1>Enter the text:</h1>
      <div className="form-control">
        <textarea
          name="text"
          id="text"
          cols="70"
          rows="10"
          value={text}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <button onClick={onClickHandler}>UpperCase</button>
    </div>
  );
}

export default States;
export { ClassCounter, FunctionStates };
